import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TextospeechPage } from './textospeech.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

const routes: Routes = [
  {
    path: '',
    component: TextospeechPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    TextToSpeech
  ],
  declarations: [TextospeechPage]
})
export class TextospeechPageModule {}
