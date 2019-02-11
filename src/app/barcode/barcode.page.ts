import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.page.html',
  styleUrls: ['./barcode.page.scss'],
})
export class BarcodePage implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner, private alertCtrl : AlertController) { }

  ngOnInit() {
  }

  abreBarcode(){
    this.barcodeScanner.scan().then(barcodeData => {
      //let resultado = JSON.stringify(barcodeData);
      this.abreAlert(barcodeData.text);
     }).catch(err => {
      let resposta = JSON.stringify(err);
      this.abreAlert(resposta);
     });
  }

  async abreAlert(mensagem : any){
    const alert = await this.alertCtrl.create({
      header: 'Este é o código de barras:',
      message: mensagem,
      buttons: ['ok']
    });
    await alert.present();
  }

}
