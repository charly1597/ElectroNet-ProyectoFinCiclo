import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiPhpService } from 'src/app/services/api-php.service';

@Component({
  selector: 'app-form-ventas',
  templateUrl: './form-ventas.component.html',
  styleUrls: ['./form-ventas.component.css']
})
export class FormVentasComponent implements OnInit {
  loginForm: FormGroup;
  users:any[]=[];
  products:any[]=[];
  precio:any=0;

  constructor(private apiSv : ApiPhpService, private router:Router) {
    this.loginForm = new FormGroup({
      id_usuario   : new FormControl('', [Validators.required]),
      id_elec: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required]),
    });
   }

  ngOnInit(): void {
    this.obtenerUsuarios();
    this.obtenerProductos();
  }

  obtenerUsuarios(){
    this.apiSv.obtenerTodosUsuarios().subscribe(users => {
      this.users = users
      console.log(users)
    })
  }

  obtenerProductos(){
    this.apiSv.getProducts().subscribe(products => {
      this.products = products
    })
  }

  insertar(){
    this.apiSv.insertarVenta(this.loginForm.value).subscribe();
    this.router.navigateByUrl('/admin/ventas')
  }

  buscarProducto(id:any){
     this.apiSv.getProduct(id).subscribe(product => {
      this.precio = product.precio
      console.log(product)
    })
  }

}
