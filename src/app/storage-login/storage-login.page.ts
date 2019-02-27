import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-storage-login',
  templateUrl: './storage-login.page.html',
  styleUrls: ['./storage-login.page.scss'],
})
export class StorageLoginPage implements OnInit {

  //foram adiiconadas linhas no app.module.ts para o storage funcionar

  email: string = 'joca@bol.com';
  senha: string = '789';
  usuario: any;
  valor: string = '';

  constructor(private storage: Storage, private usuarios: UsuarioService, public navCtrl: NavController, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    this.storage.get('logado').then((val) => {
      if (val == true) {
        this.navCtrl.navigateRoot('logado-sair');
      }
    });
  }

  ngOnInit() {
    this.storage.get('logado').then((val) => {
      if (val == true) {
        this.navCtrl.navigateRoot('logado-sair');
      }
    });
  }

  valida() {
    if (this.email != null && this.senha != null) {
      this.valor = '';
    } else {
      this.valor = 'true';
    }
  }

  logar() {
    this.usuarios.login(this.email, this.senha)
      .then((response) => {
        if (response == 1) {
          this.alerta('O email não pode ser vazio!');
        } else if (response == 2) {
          this.alerta('A senha não pode ser vazia!');
        } else if (response == 4) {
          this.alerta('Email ou senha não conferem, tente novamente!');
        } else {
          //sava dados no storage
          try {
            this.storage.set('id', response['id']);
            this.storage.set('logado', true);
            this.storage.set('email', response['email']);
            this.navCtrl.navigateRoot('logado-sair');
          } catch (e) {
            alert(e);
          }

        }
      })
      .catch((response) => {
        alert(response);
      });
  }

  async alerta(mensagem) {
    const alert = await this.alertCtrl.create({
      message: mensagem,
      buttons: ['ok']
    });
    await alert.present();
  }



}
