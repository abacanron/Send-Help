import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { Juliuspage1Page } from './juliuspage1.page';

const routes: Routes = [
  {
    path: '',
    component: Juliuspage1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Juliuspage1PageRoutingModule {}
