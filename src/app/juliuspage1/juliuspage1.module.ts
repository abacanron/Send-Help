import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Juliuspage1PageRoutingModule } from './juliuspage1-routing.module';

import { Juliuspage1Page } from './juliuspage1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Juliuspage1PageRoutingModule
  ],
  declarations: [Juliuspage1Page]
})
export class Juliuspage1PageModule {}
