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
  private url = '/todos.php';
  constructor(private http: HttpClient) { }


  getAllPaliativos(): Observable<Paliativos[]>
  {
    const path = '/todos.php?valor=1';
    //const path = 'https://jsonplaceholder.typicode.com/todos';
    //const path = 'http://estadisticas.x10host.com/todos';
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
    .set("Access-Control-Allow-Origin", '*')
    .set("Access-Control-Allow-Credentials", "true")
    .set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE")
    .set("Access-Control-Max-Age", "3600")
    .set("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With, remember-me");

    return this.http.get<Paliativos[]>(path,{headers:headers});
  }

  getAllEpoc(): Observable<Epoc[]>
  {
    const path = '/todos.php?valor=2';
    //const path = 'https://jsonplaceholder.typicode.com/todos';
    //const path = 'http://estadisticas.x10host.com/todos';
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
    .set("Access-Control-Allow-Origin", '*')
    .set("Access-Control-Allow-Credentials", "true")
    .set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE")
    .set("Access-Control-Max-Age", "3600")
    .set("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With, remember-me");

    return this.http.get<Epoc[]>(path,{headers:headers});
  }

  getEpoc(id: number): Observable<Epoc>
  {
    //const url = `${this.heroesUrl}/${id}`;
    const path = `${this.url}/?epoc=1&id=${id}`;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
    .set("Access-Control-Allow-Origin", '*')
    .set("Access-Control-Allow-Credentials", "true")
    .set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE")
    .set("Access-Control-Max-Age", "3600")
    .set("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With, remember-me");
    return this.http.get<Epoc[]>(path, { headers: headers }).pipe(
      map(pacientes => pacientes[0]));

  }

  getPaliativo(id: number): Observable<Paliativos>
  {
    //const url = `${this.heroesUrl}/${id}`;
    const path = `${this.url}/?paliativo=1&id=${id}`;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
    .set("Access-Control-Allow-Origin", '*')
    .set("Access-Control-Allow-Credentials", "true")
    .set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE")
    .set("Access-Control-Max-Age", "3600")
    .set("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With, remember-me");
    return this.http.get<Paliativos[]>(path, { headers: headers }).pipe(
      map(pacientes => pacientes[0]));

  }

  /** PUT: update on the server */
  updatePaliativo(paliativo: Paliativos): Observable<any>
  {

     let  headers = new HttpHeaders().set('Content-Type', 'application/json')
        .set("Access-Control-Allow-Origin", '*')
        .set("Access-Control-Allow-Credentials", "true")
        .set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE")
        .set("Access-Control-Max-Age", "3600")
        .set("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With, remember-me");

  return this.http.put(this.url, paliativo, { headers: headers }).pipe(

    catchError(this.handleError<any>('updatePaliativo'))
  );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
