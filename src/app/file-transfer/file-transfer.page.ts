import { Component, OnInit } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-file-transfer',
  templateUrl: './file-transfer.page.html',
  styleUrls: ['./file-transfer.page.scss'],
})
export class FileTransferPage implements OnInit {

  constructor(private fileChooser: FileChooser, private filePath: FilePath, private fileOpener: FileOpener, private transfer: FileTransfer, private alertCtrl : AlertController, public loadingController: LoadingController) { }

  ngOnInit() {
  }

  abre() {
    this.fileChooser.open()
      .then(uri => {
        this.filePath.resolveNativePath(uri)
          .then(filePath => {

            //acha extenção
            var extencao = filePath.split('.');

            //se for pdf
            if (extencao[1] == 'pdf') {
              this.fileOpener.open(filePath, 'application/pdf')
                .then(() => alert('O arquivo foi aberto'))
                .catch(e => alert('Erro ao abrir arquivo '+ e));
            } else if (extencao[1] == 'jpeg'){
              this.fileOpener.open(filePath, 'image/jpeg')
                .then(() => alert('O arquivo foi aberto'))
                .catch(e => alert('Erro ao abrir arquivo '+ e));
            } else if (extencao[1] == 'jpg'){
              this.fileOpener.open(filePath, 'image/jpg')
                .then(() => alert('O arquivo foi aberto'))
                .catch(e => alert('Erro ao abrir arquivo '+ e));
            } else if (extencao[1] == 'gif'){
              this.fileOpener.open(filePath, 'image/gif')
                .then(() => alert('O arquivo foi aberto'))
                .catch(e => alert('Erro ao abrir arquivo '+ e));
            } else if (extencao[1] == 'png'){
              this.fileOpener.open(filePath, 'image/png')
                .then(() => alert('O arquivo foi aberto'))
                .catch(e => alert('Erro ao abrir arquivo '+ e));
            } else {
              alert('O arquivo não é um PDF ou uma imagem válida!');
            }

          })
          .catch(err => alert(err));
      })
      .catch(e => alert(e));
  }

  envia() {
    this.fileChooser.open()
      .then(uri => {
        this.filePath.resolveNativePath(uri)
          .then(filePath => {

            //acha extenção
            var extencao = filePath.split('.');
            var filename = Math.random().toString(36) + '.' + extencao[1];

            let options: FileUploadOptions = {
              fileKey: 'file',
              fileName: filename,
              chunkedMode: false,
              mimeType: "multipart/form-data",
              headers: {}
            }

            this.presentLoading();
            
            const fileTransfer: FileTransferObject = this.transfer.create();

            fileTransfer.upload(filePath,'https://www.acumulando.com.br/ionic_file_transfer.php', options)
              .then((data) => {
                this.loadingDismiss();
                this.abreAlert();
              }, (err) => {
                this.loadingDismiss();
                alert('Erro na transferência: '+err);
              })

          })
          .catch(err => alert(err));
      })
      .catch(e => alert(e));
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Fazendo upload do arquivo...',
      spinner: 'bubbles'
    });
    return await loading.present();
  }

  async loadingDismiss() {
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

  async abreAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Upload completo!',
      subHeader: 'Seu arquivo foi enviado para o servidor.',
      message: 'Agora você pode acessar o arquivo pelo servidor web',
      buttons: ['ok']
    });
    await alert.present();
  }

}
