import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskService } from './services/task.service';
import { PaliativosComponent } from './components/paliativos/paliativos.component';
import { EpocComponent } from './components/epoc/epoc.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailEpocComponent } from './components/detail-epoc/detail-epoc.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { MenuComponent } from './components/menu/menu.component';
import { EditEpocComponent } from './components/edit-epoc/edit-epoc.component';
import { MenuPaliativosComponent } from './components/menu-paliativos/menu-paliativos.component';
import { MenuEpocComponent } from './components/menu-epoc/menu-epoc.component';
import { DetailPaliativosComponent } from './components/detail-paliativos/detail-paliativos.component';


@NgModule({
  declarations: [
    AppComponent,
    PaliativosComponent,
    EpocComponent,
    DetailEpocComponent,
    PrincipalComponent,
    MenuComponent,
    EditEpocComponent,
    MenuPaliativosComponent,
    MenuEpocComponent,
    DetailPaliativosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
