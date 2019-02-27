import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-textospeech',
  templateUrl: './textospeech.page.html',
  styleUrls: ['./textospeech.page.scss'],
})
export class TextospeechPage implements OnInit {

  texto: string;

  constructor(private tts: TextToSpeech) { }

  ngOnInit() {
  }

  falar(){
    this.tts.speak({
      text: this.texto,
      locale: 'pt-BR'
    })
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
  }

}
