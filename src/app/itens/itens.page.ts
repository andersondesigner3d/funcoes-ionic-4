import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.page.html',
  styleUrls: ['./itens.page.scss'],
})
export class ItensPage implements OnInit {

  constructor(private alertCtrl : AlertController) { }

  ngOnInit() {
  }

  async buttonClick(){
    const alert = await this.alertCtrl.create({
      header: 'Título do Alert',
      subHeader: 'Sub título do Alert',
      message: 'Este é um exemplo de Alert.',
      buttons: ['ok']
    });
    await alert.present();
  }

}
