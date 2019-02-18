import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url : string = 'https://www.acumulando.com.br/ionic_cadastro_usuario';
  url2 : string = 'https://www.acumulando.com.br/ionic_get_usuario';
  url3 : string = 'https://www.acumulando.com.br/ionic_put_usuario';
  url4 : string = 'https://www.acumulando.com.br/ionic_delete_usuario';

  constructor(private http : HttpClient) { }

  obterUsuario(){
    return this.http.get(this.url2).toPromise();
  }

  cadastrarUsuario(emailrecebido : string, senharecebida : string){
    let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
    let postData = 'email='+emailrecebido+'&senha='+senharecebida;
    return this.http.post(this.url,postData,{headers : headers}).toPromise();
  }

  editarUsuario(idrecebido: any, emailrecebido: any, senharecebida: any){
    let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
    let postData = 'id='+idrecebido+'&email='+emailrecebido+'&senha='+senharecebida;
    return this.http.post(this.url3,postData,{headers : headers}).toPromise();
  }

  apagarUsuario(idrecebido: any){
    let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
    let postData = 'id='+idrecebido;
    return this.http.post(this.url4,postData,{headers : headers}).toPromise();
  }

}
