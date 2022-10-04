import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LedZeppComponent } from './components/musica/led-zepp/led-zepp.component';
import { NirvanaComponent } from './components/musica/nirvana/nirvana.component';
import { PinkFloydComponent } from './components/musica/pink-floyd/pink-floyd.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'Nirvana', component:NirvanaComponent},
  {path:'Led-Zepp', component:LedZeppComponent},
  {path:'Pink-Floyd', component:PinkFloydComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
