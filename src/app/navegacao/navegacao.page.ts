import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.page.html',
  styleUrls: ['./navegacao.page.scss'],
})
export class NavegacaoPage implements OnInit {

  valor: string = '';
  constructor(private navCtrl : NavController, private rota : Router) { }

  ngOnInit() {
  }

  async comPush(){
    this.rota.navigate(['navegacao2', {id : 1, idade: 35, nome: 'Anderson Rocha', valor : this.valor}]);
    //this.rota.navigateByUrl('navegacao2');
  }

  async comPush2(){
    this.navCtrl.navigateForward(['navegacao2', {id : 2, idade: 31, nome: 'Rhayanne Kelly', valor : this.valor}]);
  }

  async semPilha(){
    this.navCtrl.navigateRoot(['navegacao2',{id: 3, idade: 6, nome: 'Lívia Sophia', valor : this.valor}]);
  }

}
