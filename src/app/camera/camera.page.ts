import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Base64ToGallery, Base64ToGalleryOptions } from '@ionic-native/base64-to-gallery/ngx';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  foto: any;

  constructor(private camera: Camera, private base64ToGallery: Base64ToGallery) { }

  ngOnInit() {
  }

  abrirCamera() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {

      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.foto = base64Image;      
      
      //salva na galeria
      let options:Base64ToGalleryOptions = { prefix: '_img',mediaScanner: true }
      this.base64ToGallery.base64ToGallery(imageData, options).then(
        res => alert('sucesso ao salvar na galeria! ' + res),
        err => alert('Erro ao salvar na galeria! ' + err)
      );

    }, (err) => {
      alert('erro ao tirar a foto: ' + err);
    });
  }  

}
