import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const urlBase = 'http://localhost:8080/api/dados';

@Injectable({
  providedIn: 'root'
})
export class DadosService{
  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(urlBase);
  }

  get(id: any): Observable<any>{
    return this.http.get(`${urlBase}/${id}`);
  }

  create(data: { nome: string; email: string; telefone: string; }): Observable<any>{
    return this.http.post(urlBase, data);
  }

  update(id: any, data: any): Observable<any>{
    return this.http.put(`${urlBase}/${id}`, data);
  }

  delete(id: any): Observable<any>{
    return this.http.delete(`${urlBase}/${id}`);
  }

  findByNome(nome: any): Observable<any>{
    return this.http.get(`${urlBase}?nome=${nome}`);
  }

}