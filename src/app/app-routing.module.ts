import { DetailPaliativosComponent } from './components/detail-paliativos/detail-paliativos.component';
import { MenuPaliativosComponent } from './components/menu-paliativos/menu-paliativos.component';
import { MenuEpocComponent } from './components/menu-epoc/menu-epoc.component';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { EpocComponent } from './components/epoc/epoc.component';
import { PaliativosComponent } from './components/paliativos/paliativos.component';
import { DetailEpocComponent } from './components/detail-epoc/detail-epoc.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { EditEpocComponent } from './components/edit-epoc/edit-epoc.component';


const routes: Routes = [
  { path: 'menu-paliativos', component: MenuPaliativosComponent },
  { path: 'menu-epoc', component: MenuEpocComponent },
  { path: 'edit-epoc', component: EditEpocComponent },
  { path: 'detail-epoc/:id', component: DetailEpocComponent },
  { path: 'detail-paliativo/:id', component: DetailPaliativosComponent},
  { path: 'principal', component: PrincipalComponent },
  { path: '', redirectTo: 'principal', pathMatch: 'full' }
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
