import { Component, OnInit } from '@angular/core';
import { Epoc } from './../../interfaces/epoc';
import { TaskService } from './../../services/task.service';


@Component({
  selector: 'app-epoc',
  templateUrl: './epoc.component.html',
  styleUrls: ['./epoc.component.css']
})
export class EpocComponent implements OnInit {

  pacientesEpoc: Epoc[];

  constructor(
    private taskService:TaskService
  ) { }

  ngOnInit()
  {
    this.getAllEpoc();
  }


  getAllEpoc(): void
  {
    this.taskService.getAllEpoc()
    .subscribe(pacientes => this.pacientesEpoc = pacientes);
    console.log('pacientes:' + this.pacientesEpoc);
  }
}
