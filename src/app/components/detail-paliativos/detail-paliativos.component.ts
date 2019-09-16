import { Paliativos } from './../../interfaces/paliativos';
import { TaskService } from './../../services/task.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-paliativos',
  templateUrl: './detail-paliativos.component.html',
  styleUrls: ['./detail-paliativos.component.css','./../../app.component.css']
})
export class DetailPaliativosComponent implements OnInit {

  @Input() paliativo: Paliativos;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location
  ) { }

  ngOnInit()
  {
    this.getPaliativo();
  }

  getPaliativo(): void
  {
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskService.getPaliativo(id)
      .subscribe(paliativo => this.paliativo = paliativo);
    console.log('Paliativo:' + this.paliativo);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.taskService.updatePaliativo(this.paliativo)
      .subscribe(() => this.goBack());
  }

}
