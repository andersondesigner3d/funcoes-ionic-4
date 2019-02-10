import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(private toastCtrl : ToastController) { }

  ngOnInit() {
  }

  async mostrarBotton(){
    const toast = await this.toastCtrl.create({
      message: 'Este é um toast posição botton',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  async mostrarMiddle(){
    const toast = await this.toastCtrl.create({
      message: 'Este é um toast posição middle',
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

  async mostrarTop(){
    const toast = await this.toastCtrl.create({
      message: 'Este é um toast posição top',
      position: 'top',
      showCloseButton: true,
      closeButtonText: 'OK'
    });
    toast.present();
  }

}
