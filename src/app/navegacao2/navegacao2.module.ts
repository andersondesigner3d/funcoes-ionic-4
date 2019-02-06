import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Navegacao2Page } from './navegacao2.page';

const routes: Routes = [
  {
    path: '',
    component: Navegacao2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Navegacao2Page]
})
export class Navegacao2PageModule {}
