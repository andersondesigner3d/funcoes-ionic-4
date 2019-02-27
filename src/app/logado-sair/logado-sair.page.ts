import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-logado-sair',
  templateUrl: './logado-sair.page.html',
  styleUrls: ['./logado-sair.page.scss'],
})
export class LogadoSairPage implements OnInit {

  email: any;

  constructor(private storage: Storage, public navCtrl: NavController) {

    this.storage.get('email').then((val) => {
      this.email = val;
    });

  }

  ngOnInit() {
  }

  deslogar() {
    this.storage.set('id', '');
    this.storage.set('logado', false);
    this.storage.set('email', '');
    this.navCtrl.navigateRoot('storage-login');
  }

}
