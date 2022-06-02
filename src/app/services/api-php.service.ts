import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPhpService {
  API = 'http://localhost/ApiGestionUsuarios';

  constructor(private clienteHttp : HttpClient, private router : Router) { }

  findByEmailAndPass(credentials : any){
    return this.clienteHttp.post(`${this.API}/buscarPorCorreoyPass.php`, credentials);
  }

  signUp(credentials :any): Observable<any>{
    return this.clienteHttp.post(`${this.API}/registro.php`, credentials);
  }

  logOut(){
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login')
  }
}
