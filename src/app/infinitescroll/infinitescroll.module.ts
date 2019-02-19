import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfinitescrollPage } from './infinitescroll.page';

const routes: Routes = [
  {
    path: '',
    component: InfinitescrollPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InfinitescrollPage]
})
export class InfinitescrollPageModule {}
