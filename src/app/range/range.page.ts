import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.page.html',
  styleUrls: ['./range.page.scss'],
})
export class RangePage implements OnInit {

  brilho : number = 80;
  idade : any = {lower:16, upper:80};
  diferenca : number = this.idade.upper - this.idade.lower;

  constructor() { }

  ngOnInit() {
  }

  calculaDiferenca() {
    this.diferenca = this.idade.upper - this.idade.lower;
  }

}
