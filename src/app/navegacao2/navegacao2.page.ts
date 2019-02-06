import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-navegacao2',
  templateUrl: './navegacao2.page.html',
  styleUrls: ['./navegacao2.page.scss'],
})
export class Navegacao2Page implements OnInit {

  id : any;
  idade : any;
  nome : any;
  valor : any;
  constructor(private rota : Router, private navCtrl : NavController, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.idade = this.route.snapshot.paramMap.get('idade');
    this.nome = this.route.snapshot.paramMap.get('nome');
    this.valor = this.route.snapshot.paramMap.get('valor');
  }

  async comPush(){
    this.rota.navigateByUrl('navegacao3');
  }

  async comPush2(){
    this.navCtrl.navigateForward('navegacao3', {});
  }

  async semPilha(){
    this.navCtrl.navigateRoot('navegacao3');
  }

}
