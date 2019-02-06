import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalconteudo',
  templateUrl: './modalconteudo.page.html',
  styleUrls: ['./modalconteudo.page.scss'],
})
export class ModalconteudoPage implements OnInit {

  nome : string;
  idade : string;
  resposta : string;
  constructor(private navParam : NavParams, private modalCtrl : ModalController) {}

  ngOnInit() {
    this.nome = this.navParam.get('nome');
    this.idade = this.navParam.get('idade');
  }

  async fechaModal(){
    this.modalCtrl.dismiss(this.resposta);
  }


}
