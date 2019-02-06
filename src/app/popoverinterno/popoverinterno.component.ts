import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popoverinterno',
  templateUrl: './popoverinterno.component.html',
  styleUrls: ['./popoverinterno.component.scss']
})
export class PopoverinternoComponent implements OnInit {

  resposta : string;

  constructor(private popoverCtrl : PopoverController) { }

  ngOnInit() {
  }

  async fechaPopover(){
    this.popoverCtrl.dismiss(this.resposta);
  }

}
