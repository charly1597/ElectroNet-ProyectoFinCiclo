import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPhpService {
  API = 'https://carlostalavera.000webhostapp.com/ApiElectronet';

  constructor(private clienteHttp : HttpClient, private router : Router) { }

  findByEmailAndPass(credentials : any){
    return this.clienteHttp.get(`${this.API}/buscarPorCorreoyPass.php?email=${credentials.email}&password=${credentials.password}`);
  }

  signUp(credentials :any): Observable<any>{
    return this.clienteHttp.get(`${this.API}/registro.php?email=${credentials.email}&password=${credentials.password}&nombre=${credentials.name}`);
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
    return this.clienteHttp.get(`${this.API}/insertarVenta.php?id_usu=${venta.id_usuario}&id_elec=${venta.id_elec}&precio=${venta.precio}`);
  }

  obtenerTodosUsuarios(): Observable<any>{
    return this.clienteHttp.get(`${this.API}/obtenerTodosUsuarios.php`);
  }

  obtenerVentasUsuario(): Observable<any>{
    let user = JSON.parse(localStorage.getItem('user'));
    return this.clienteHttp.get(`${this.API}/obtenerVentasUsuario.php?id=${user.id}`);
  }

  obtenerTodasVentas(): Observable<any>{
    return this.clienteHttp.get(`${this.API}/obtenerTodasVentas.php`);
  }

  obtenerCategorias(): Observable<any>{
    return this.clienteHttp.get(`${this.API}/obtenerCategorias.php`);
  }

  obtenerCategoria(id:any): Observable<any>{
    return this.clienteHttp.get(`${this.API}/obtenerCategoria.php?id=${id}`)
  }

  insertarCategoria(categoria:any): Observable<any>{
    return this.clienteHttp.get(`${this.API}/insertarCategoria.php?categoria=${categoria.categoria}`)
  }

  updateCategoria(categoria:any): Observable<any>{
    return this.clienteHttp.get(`${this.API}/updateCategoria.php?id=${categoria.id}&categoria=${categoria.categoria}`);
  }

  borrarCategoria(id:any): Observable<any>{
    return this.clienteHttp.get(`${this.API}/borrarCategoria.php?id=${id}`)
  }

  insertarComentario(comentario: any): Observable<any>{
    return this.clienteHttp.get(`${this.API}/insertarComentario.php?id_usu=${comentario.id_usuario}&id_elec=${comentario.id_elec}&comentario=${comentario.comentario}`);
  }

  obtenerComentariosProducto(id:any): Observable<any>{
    return this.clienteHttp.get(`${this.API}/obtenerComentariosProducto.php?id=${id}`);
  }

  obtenerUsuario(id:any): Observable<any>{
    return this.clienteHttp.get(`${this.API}/obtenerUsuario.php?id=${id}`)
  }

  insertarElectrodomestico(electrodomestico:any): Observable<any>{
    return this.clienteHttp.get(`${this.API}/insertarElectrodomestico.php?nombre=${electrodomestico.nombre}&precio=${electrodomestico.precio}&categoria=${electrodomestico.categoria}&imagen=${electrodomestico.imagen}&descripcion=${electrodomestico.descripcion}`);
  }

  borrarProducto(id:any): Observable<any>{
    return this.clienteHttp.get(`${this.API}/borrarProducto.php?id=${id}`)
  }

  updateProducto(electrodomestico:any): Observable<any>{
    return this.clienteHttp.get(`${this.API}/updateProductos.php?id=${electrodomestico.id}&nombre=${electrodomestico.nombre}&precio=${electrodomestico.precio}&categoria=${electrodomestico.categoria}&imagen=${electrodomestico.imagen}&descripcion=${electrodomestico.descripcion}`);
  }

  borrarVenta(id:any): Observable<any>{
    return this.clienteHttp.get(`${this.API}/borrarVenta.php?id=${id}`);
  }

  updateUsuario(usuario:any): Observable<any>{
    return this.clienteHttp.get(`${this.API}/updateUsuario.php?id=${usuario.id}&nombre=${usuario.name}&email=${usuario.email}&password=${usuario.password}`);
  }

  borrarUsuario(id:any): Observable<any>{
    return this.clienteHttp.get(`${this.API}/borrarUsuario.php?id=${id}`);
  }
}
