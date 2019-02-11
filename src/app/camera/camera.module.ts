import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CameraPage } from './camera.page';
import { Camera } from '@ionic-native/camera/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';

const routes: Routes = [
  {
    path: '',
    component: CameraPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    Camera,
    Base64ToGallery, 
  ],
  declarations: [CameraPage]
})
export class CameraPageModule {}
