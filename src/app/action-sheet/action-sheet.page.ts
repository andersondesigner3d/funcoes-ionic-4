import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController) { }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Deletar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          alert('Botão deletar pressionado!');
        }
      }, {
        text: 'Compartilhar',
        icon: 'share',
        handler: () => {
          alert('Botão compartilhar pressionado!');
        }
      }, {
        text: 'Jogar',
        icon: 'arrow-dropright-circle',
        handler: () => {
          alert('Botão jogar pressionado!');
        }
      }, {
        text: 'Favoritos',
        icon: 'heart',
        handler: () => {
          alert('Adicionado aos favoritos!');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('saindo do action sheet');
        }
      }]
    });
    await actionSheet.present();
  }

  ngOnInit() {
  }

}
