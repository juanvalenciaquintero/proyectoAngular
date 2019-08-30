import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TaskService } from './services/task.service';
import { PaliativosComponent } from './components/paliativos/paliativos.component';
import { EpocComponent } from './components/epoc/epoc.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailEpocComponent } from './components/detail-epoc/detail-epoc.component';
import { PrincipalComponent } from './components/principal/principal.component';


@NgModule({
  declarations: [
    AppComponent,
    PaliativosComponent,
    EpocComponent,
    DetailEpocComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
