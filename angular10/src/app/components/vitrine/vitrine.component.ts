import { Component, OnInit } from '@angular/core';
import{ VitrineService } from '../../services/vitrine.service';


@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent implements OnInit {

  constructor(
    private _vitrineService: VitrineService

  ) { }

  tipoJoiasList:any=[];

  ngOnInit(): void {
    this.getTipoJoias();
  }

  getTipoJoias(){
    this._vitrineService.GetTipoJoiasList().subscribe(response =>{
      this.tipoJoiasList = response;
    })
  }

}
