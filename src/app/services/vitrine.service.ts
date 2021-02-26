import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { Joia } from 'src/shared/models/Joia.model';

@Injectable({
  providedIn: 'root'
})
export class VitrineService {

  readonly ApiUrl = "https://perez-prata.herokuapp.com/";

  constructor(private http:HttpClient){ }


    GetTipoJoiasList():Observable<any[]>{
      return this.http.get<any>(this.ApiUrl+'joia/tipo-joias');
    }

    GetJoiasListByTipo(joiaTipo : string):Observable<Joia[]>{
      return this.http.get<Joia[]>(this.ApiUrl+'joia'+joiaTipo);
    }

    // PostTeste(variable: any){
    //   return this.http.post(this.http+'restoUrl', variable);
    // }

  
}
