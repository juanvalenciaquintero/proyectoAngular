import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { EpocComponent } from './components/epoc/epoc.component';
import { PaliativosComponent } from './components/paliativos/paliativos.component';
import { DetailEpocComponent } from './components/detail-epoc/detail-epoc.component';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: '', redirectTo: 'principal', pathMatch: 'full' },
  { path: 'paliativos', component: PaliativosComponent },
  { path: 'epoc', component: EpocComponent },
  { path: 'epoc/detail/:id' , component: DetailEpocComponent}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
