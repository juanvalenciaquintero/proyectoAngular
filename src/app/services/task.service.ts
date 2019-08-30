import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paliativos } from './../interfaces/paliativos';
import { Epoc } from './../interfaces/epoc';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private cadena: string;
  constructor(private http: HttpClient) { }

  getAllPaliativos(): Observable<Paliativos[]>
  {
    const path = '/todos.php?valor=1';
    //const path = 'https://jsonplaceholder.typicode.com/todos';
    //const path = 'http://estadisticas.x10host.com/todos';
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this.http.get<Paliativos[]>(path,{headers:headers});
  }

  getAllEpoc(): Observable<Epoc[]>
  {
    const path = '/todos.php?valor=2';
    //const path = 'https://jsonplaceholder.typicode.com/todos';
    //const path = 'http://estadisticas.x10host.com/todos';
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this.http.get<Epoc[]>(path,{headers:headers});
  }

  getEpoc(id: number): Observable<Epoc>
  {
    //const url = `${this.heroesUrl}/${id}`;
    const path = '/todos.php/${id}';
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this.http.get<Epoc[]>(path, { headers: headers }).pipe(
      map(pacientes => pacientes[0]));

  }
}
