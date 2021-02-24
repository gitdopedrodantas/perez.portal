import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Joia } from 'src/shared/models/Joia.model';
import { VitrineService } from '../../services/vitrine.service';
import {style, state, animate, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(500, style({opacity:1})) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({opacity:0})) 
      ])
    ]),
    trigger('fade', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(500, style({opacity:1})) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({opacity:0})) 
      ])
    ])
  ]
})
export class VitrineComponent implements OnInit {

  constructor(
    private _vitrineService: VitrineService,
    private router: Router,
    private matIconRegistry: MatIconRegistry,
    private domSanitzer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'close',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/close-icon.svg')
    );
  }

  nameRota: string = '';
  nameRotaWithouSlash: string = '';
  over: boolean[] = [];

  joias: Joia[] = [];
  joiasToShow: Joia[] = [];
  distinctJoiasCaracteristicas = new Array();
  selectedCaracteristicas = new Array();

  choice = 2;
  state = 'in';
  counter = 0;
  enableAnimation = false;


  ngOnInit(): void {
    this.nameRota = this.router.url
    if (this.nameRota == '/aneis') {
      this.nameRotaWithouSlash = 'ANÉIS'
    }
    else {
      this.nameRotaWithouSlash = this.nameRota.substring(1).toUpperCase();
    }

    this._vitrineService.GetJoiasListByTipo(this.nameRota).subscribe(res => {
      this.joias = res.sort((a, b) => a.nome.localeCompare(b.nome));
      this.distinctJoiasCaracteristicas = this.getAllJoiasCaracteristicas(this.joias);
      this.joiasToShow = this.joias;
    });
    this.over = new Array(this.joias.length);
    this.over.fill(false);
  }

  private getAllJoiasCaracteristicas(joias: Joia[]): string[] {
    let distinct = new Array();

    for (let i = 0; i < joias.length; i++) {
      let j = 0;
      while (joias[i].caracteristicas[j]?.descricao != null && !distinct.includes(joias[i].caracteristicas[j]?.descricao)) {
        distinct.push(joias[i].caracteristicas[j]?.descricao);
        j++;
      }
    }
    return distinct;
  }

  addCaracteristicaToFilter(caracteristica: string) {
    this.selectedCaracteristicas.push(caracteristica);
    this.filterJoiasByCaracteristica();
  }

  removeCaracteristicaToFilter(caracteristica: string) {
    this.selectedCaracteristicas = this.selectedCaracteristicas.filter(obj => obj !== caracteristica);
    this.filterJoiasByCaracteristica();
  }

  filterJoiasByCaracteristica() {
    if (this.selectedCaracteristicas.length == 0) {
      this.joiasToShow = this.joias;
    }
    else {
      this.joiasToShow = [];
      for (let i = 0; i < this.joias.length; i++) {
        let j = 0;
        while (this.joias[i].caracteristicas[j]?.descricao != null
          && this.selectedCaracteristicas.includes(this.joias[i].caracteristicas[j]?.descricao)
          && !this.joiasToShow.includes(this.joias[i])) {
          this.joiasToShow.push(this.joias[i]);
          j++;
        }
      }
    }
  }

  verifyIfCaracteristicaIsSelected(caracteristica: string): boolean {
    return this.selectedCaracteristicas.includes(caracteristica) ?? false;
  }
}
