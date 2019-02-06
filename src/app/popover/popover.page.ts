import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverinternoComponent } from '../popoverinterno/popoverinterno.component';


@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  resposta :string = '';

  constructor(private popoverCtrl : PopoverController) { }

  ngOnInit() {
  }

  async showPopover(event : any){
    let popover = await this.popoverCtrl.create({
      component: PopoverinternoComponent,
      event : event,
      translucent : true
    });
    popover.onDidDismiss()
      .then((data) => {
        this.resposta = data.data;
      });
    return await popover.present();
  }

}
