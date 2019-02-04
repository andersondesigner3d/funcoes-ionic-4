import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SplitpaneMenuPage } from './splitpane-menu.page';

const routes: Routes = [
  {
    path: '',
    component: SplitpaneMenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SplitpaneMenuPage]
})
export class SplitpaneMenuPageModule {}
