import { Task } from './../../interfaces/task';
import { TaskService } from './../../services/task.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-paliativos',
  templateUrl: './paliativos.component.html',
  styleUrls: ['./paliativos.component.css']
})
export class PaliativosComponent implements OnInit {

  pacientes: Task[];
  constructor(private taskService:TaskService) { }

  ngOnInit()
  {
    this.getAllTasks();
  }

  getAllTasks(): void
  {
    this.taskService.getAllTasks()
    .subscribe(pacientes => this.pacientes = pacientes);
    console.log('pacientes:' + this.pacientes);
  }

}
