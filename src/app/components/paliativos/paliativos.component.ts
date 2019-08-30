import { Paliativos } from './../../interfaces/paliativos';

import { TaskService } from './../../services/task.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-paliativos',
  templateUrl: './paliativos.component.html',
  styleUrls: ['./paliativos.component.css']
})
export class PaliativosComponent implements OnInit {

  pacientesPal: Paliativos[];

  
  constructor(private taskService:TaskService) { }

  ngOnInit()
  {
    this.getAllPaliativos();
  }

  getAllPaliativos(): void
  {
    this.taskService.getAllPaliativos()
    .subscribe(pacientes => this.pacientesPal = pacientes);
    console.log('pacientes:' + this.pacientesPal);
  }


 



}
