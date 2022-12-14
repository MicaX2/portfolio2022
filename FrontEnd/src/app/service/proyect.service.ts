import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { elementAt, Observable } from 'rxjs';
import { proyect } from '../model/proyect.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectService {
  URL='http://localhost:8090/proyect/';

  constructor(private http:HttpClient) { }

  public list():Observable<proyect[]>{
    return this.http.get<proyect[]>(this.URL+'list')
  }

  //para obtener datos de un proyecto particular
  public detail(id:number):Observable<proyect>{
    return this.http.get<proyect>(this.URL + `detail/${id}`);
  }

  //guardar
  public save(exp:proyect):Observable<any>{
    return this.http.post<any>(this.URL + `create`,exp);
  }

  //actualizar
  public update(id:number,exp:proyect):Observable<any>{
    return this.http.put<any>(this.URL + `update/${id}` ,exp)
  }
  
  //borrar
  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`)
  }
}
