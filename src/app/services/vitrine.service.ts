import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class VitrineService {

  readonly ApiUrl = "https://localhost:44315/";

  constructor(private http:HttpClient){ }

    GetTipoJoiasList():Observable<any[]>{
      return this.http.get<any>(this.ApiUrl+'joias/tipo-joias');
    }

    // PostTeste(variable: any){
    //   return this.http.post(this.http+'restoUrl', variable);
    // }

  
}
