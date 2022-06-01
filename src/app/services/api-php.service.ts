import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiPhpService {
  API = 'http://localhost/ApiGestionUsuarios';

  constructor(private clienteHttp : HttpClient, private router : Router) { }

  findByEmailAndPass(credentials : any){
    return this.clienteHttp.post(`${this.API}/buscarPorCorreoyPass.php`, credentials);
  }
}
