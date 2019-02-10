import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.page.html',
  styleUrls: ['./toggle.page.scss'],
})
export class TogglePage implements OnInit {

  pepperoni : any;

  constructor(private toastCtrl : ToastController) { }

  ngOnInit() {
  }

  async dizValor(){
    let resposta : string;
    if(this.pepperoni == true){
      resposta = 'Pepperoni está selecionado!';
    } else {
      resposta = 'Pepperoni não está selecionado!';
    }
    const toast = await this.toastCtrl.create({
      message: resposta,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

}
