import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {
  
  searchQuery: string = '';
  items: string[];

  constructor() {
    this.initializeItems();
   }

  ngOnInit() {
  }

  initializeItems(){
    this.items = [
      'Amsterdam',
      'Bogota',
      'Cambriano',
      'Delta',
      'Elefante',
      'Furgão Preto',
      'Gordura',
      'Humano',
      'Itália',
      'João',
      'Limão',
      'Macaco',
      'Navio',
      'Opala',
      'Paraguai',
      'Quênia',
      'Russia',
      'Sapato',
      'Tatuagem',
      'Uva',
      'Vacina',
      'Xbox',
      'Zebra'
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
