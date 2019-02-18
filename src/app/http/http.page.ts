import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-http',
  templateUrl: './http.page.html',
  styleUrls: ['./http.page.scss'],
})
export class HttpPage implements OnInit {

  listausuarios: any;
  quantos:any;
  emailcadastro:string;
  senhacadastro:string;

  constructor(
    private usuarioService: UsuarioService, 
    public loadingController: LoadingController,
    private alertCtrl : AlertController,
    private toastCtrl : ToastController
    ) { }

  ngOnInit() {
    this.get();
  }

  get() {
    this.abreLoading();
    this.usuarioService.obterUsuario()
      .then((response)=>{
        this.listausuarios = response;//JSON.stringify(response)
        this.quantos = this.listausuarios.length;
        this.fechaLoading();
      })
      .catch((response)=>{
        this.listausuarios = JSON.stringify(response);
        this.fechaLoading();
      });
  }

  put(id: any, email: any, senha:any) {
    this.usuarioService.editarUsuario(id,email,senha)
      .then((response)=>{
        this.get();
        this.fechaLoading();
        let x:string;
        if(response==1){
          x='Usuário editado com sucesso';
        } else if(response==2){
          x='Este email já está em uso! Tente outro!';
        } else if(response==0){
          x='Id ou email não encontrado!';
        }
        this.toasteditadSucesso(x);
      })
      .catch((response)=>{
        this.get();
        this.fechaLoading();
        this.toasteditadErro(response);
      });
  }

  delete(idusuario: any) {
    this.usuarioService.apagarUsuario(idusuario)
      .then((response)=>{
        this.get();
        this.fechaLoading();
        this.toastapagaSucesso();
      })
      .catch((response)=>{
        this.get();
        this.fechaLoading();
        this.toastapagaErro();
      });
  }

  post() {
    this.usuarioService.cadastrarUsuario(this.emailcadastro,this.senhacadastro)
      .then((response)=>{
        this.emailcadastro='';
        this.senhacadastro='';
        this.get();
        this.fechaLoading();
        let x:string;
        if(response==1){
          x='O cadastro foi realizado com sucesso!';
        } else if(response==2){
          x='Não foi possível cadastrar o usuário, tente novamente!';
        } else if(response==0){
          x='Este email já está em uso! Tente outro!';
        }
        this.toastcadastroSucesso(x);        
      })
      .catch((response)=>{
        this.emailcadastro='';
        this.senhacadastro='';
        this.get();
        this.fechaLoading();
        this.toastcadastroErro(response);
      });
  }

  async abreLoading() {
    const loading = await this.loadingController.create({
      message: 'Buscando usuários...',
      spinner: 'bubbles'
    });
    return await loading.present();
  }

  async fechaLoading() {
    return await this.loadingController.dismiss().then(() => console.log('loading fechado automaticamente'));
  }

  async alertEditor(id: any, email: any){
    const alert = await this.alertCtrl.create({
      header: 'Editor de usuários:',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Digite o novo email',
          value: email
        },
        {
          name: 'senha',
          type: 'password',
          placeholder: 'Digite a nova senha',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            this.put(id,data.email,data.senha);
          }
        }
      ]
    });
    await alert.present();
  }

  async alertExclusor(idusuario, email){
    const alert = await this.alertCtrl.create({
      message: 'Deseja realmente excluir <strong>'+email+'</strong>?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (data) => {
            console.log('desistiu de apagar usuario');
          }
        }, {
          text: 'Sim!',
          handler: () => {
            this.delete(idusuario);
          }
        }
      ]
    });
    await alert.present();
  }

  async toasteditadSucesso(x){
    const toast = await this.toastCtrl.create({
      message: x,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

  async toasteditadErro(x){
    const toast = await this.toastCtrl.create({
      message: 'Erro ao editar o usuário, tente novamente!=>'+x,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

  async toastapagaSucesso(){
    const toast = await this.toastCtrl.create({
      message: 'O usuário foi apagado com sucesso!',
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

  async toastapagaErro(){
    const toast = await this.toastCtrl.create({
      message: 'Erro ao apagar o usuário, tente novamente!',
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

  async toastcadastroSucesso(x:any){
    const toast = await this.toastCtrl.create({
      message: x,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

  async toastcadastroErro(x:any){
    const toast = await this.toastCtrl.create({
      message: 'Não foi possível cadastrar o usuário. Tente novamente! =>'+x,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

}
