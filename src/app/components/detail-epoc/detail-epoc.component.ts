import { TaskService } from './../../services/task.service';
import { Epoc } from './../../interfaces/epoc';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-detail-epoc',
  templateUrl: './detail-epoc.component.html',
  styleUrls: ['./detail-epoc.component.css','./../../app.component.css']
})
export class DetailEpocComponent implements OnInit {

  @Input() epoc: Epoc;
  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location

  ) { }

  ngOnInit()
  {
    this.getEpoc();
  }

  getEpoc(): void
  {
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskService.getEpoc(id)
      .subscribe(epoc => this.epoc = epoc);
    console.log('Epoc:' + this.epoc);
  }

}
