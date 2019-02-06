import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Navegacao3Page } from './navegacao3.page';

const routes: Routes = [
  {
    path: '',
    component: Navegacao3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Navegacao3Page]
})
export class Navegacao3PageModule {}
