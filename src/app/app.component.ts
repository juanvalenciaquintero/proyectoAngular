import { Component } from '@angular/core';
import { TaskService } from './services/task.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(
    private taskService: TaskService
  ) {}

  

  

 
}
