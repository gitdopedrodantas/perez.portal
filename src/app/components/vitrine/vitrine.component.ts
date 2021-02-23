import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Joia } from 'src/shared/models/Joia.model';
import{ VitrineService } from '../../services/vitrine.service';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent implements OnInit {

  constructor(
    private _vitrineService: VitrineService,
    private router:Router
  ) { }

  over: boolean[] = [];
  tipoJoiasList:any=[];
  joias: Joia[] = [];

  ngOnInit(): void {
    this._vitrineService.GetJoiasListByTipo(this.router.url).subscribe(res => this.joias = res.sort((a, b) => a.nome.localeCompare(b.nome)))
    this.over = new Array(this.joias.length);
    this.over.fill(false);
  }

 

}
