import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BingoComponent } from './bingo/bingo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bingo',
    pathMatch: 'full'
  },
  {
    path: 'bingo',
    component: BingoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
