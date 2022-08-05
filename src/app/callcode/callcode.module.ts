import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallcodePageRoutingModule } from './callcode-routing.module';

import { CallcodePage } from './callcode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallcodePageRoutingModule
  ],
  declarations: [CallcodePage]
})
export class CallcodePageModule {}
