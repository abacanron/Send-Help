import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallcodePage } from './callcode.page';

const routes: Routes = [
  {
    path: '',
    component: CallcodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallcodePageRoutingModule {}
