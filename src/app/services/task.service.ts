import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './../interfaces/task';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private cadena: string;
  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task[]>
  {
    const path = 'http://estadisticas.x10host.com/todos.php?valor=1';
    //const path = 'https://jsonplaceholder.typicode.com/todos';
    //const path = 'http://estadisticas.x10host.com/todos';
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this.http.get<Task[]>(path,{headers:headers});
  }
}
