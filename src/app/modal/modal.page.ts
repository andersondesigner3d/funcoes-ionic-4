import { ModalconteudoPage } from './../modalconteudo/modalconteudo.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { isNull } from 'util';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modCtrl: ModalController) { }

  ngOnInit() {
  }

  async abrirModal() {
    let modal = await this.modCtrl.create({
      component: ModalconteudoPage,
      componentProps: { nome: 'Anderson Rocha', idade: 37 },
    });
    modal.onDidDismiss()
      .then((data) => {
        alert(data.data);
      });
    return await modal.present();
  }

}
