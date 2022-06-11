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
    localStorage.removeItem('carrito');
    this.router.navigateByUrl('/');
  }

  getProducts(): Observable<any>{
    return this.clienteHttp.get(`${this.API}/obtenerTodosProductos.php`);
  }

  getProduct(id:number): Observable<any>{
    return this.clienteHttp.get(`${this.API}/obtenerProducto.php?id=${id}`)
  }

  insertarVenta(venta:any){
    return this.clienteHttp.post(`${this.API}/insertarVenta.php`, venta);
  }

  obtenerTodosUsuarios(): Observable<any>{
    return this.clienteHttp.get(`${this.API}/obtenerTodosUsuarios.php`);
  }

  obtenerVentasUsuario(): Observable<any>{
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user.id)
    let userDB:any = {
      id:user.id,
      nombre:user.nombre
    }
    return this.clienteHttp.get(`${this.API}/obtenerVentasUsuario.php?id=${user.id}`);
  }
}
