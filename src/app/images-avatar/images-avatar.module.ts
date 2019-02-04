import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ImagesAvatarPage } from './images-avatar.page';

const routes: Routes = [
  {
    path: '',
    component: ImagesAvatarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ImagesAvatarPage]
})
export class ImagesAvatarPageModule {}
