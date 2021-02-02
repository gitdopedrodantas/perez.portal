import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VitrineComponent } from './components/vitrine/vitrine.component';

const routes: Routes = [
  {path: 'aneis', component:VitrineComponent},
  {path: 'brincos', component:VitrineComponent},
  {path: 'colares', component:VitrineComponent},
  {path: 'pulseiras', component:VitrineComponent},
  {path: 'pingentes', component:VitrineComponent},
  {path: 'tornozeleiras', component:VitrineComponent},
  {path: 'manutencao', component:VitrineComponent},
  {path: 'informacoes', component:VitrineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
