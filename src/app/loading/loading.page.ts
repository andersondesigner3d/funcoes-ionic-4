import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  mostrar : boolean = false;

  constructor(public loadingController: LoadingController) { }

  ngOnInit() {
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Processando',
      duration: 2000,
      //mode : 'ios'
      spinner: 'bubbles' //circles, crescent, dots, lines, lines-small
    });
    loading.onDidDismiss()
      .then((data) => {
        alert('Processo concluído com êxito!');
        this.mostrar = true;
      });
    return await loading.present();
  }

}
