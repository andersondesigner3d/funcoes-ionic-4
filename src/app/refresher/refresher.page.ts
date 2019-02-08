import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  message : string = 'Puxe para baixo para obter novas informações';
  constructor() { }

  ngOnInit() {
  }

  async atualizarMensagem(event : any){
    setTimeout(()=>{
      this.message = 'O corpo dessa menssagem foi atualizado! Agora vc já sabe usar o refresher';
      event.target.complete();
    },2000);
  }

}
