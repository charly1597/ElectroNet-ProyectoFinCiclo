import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiPhpService } from 'src/app/services/api-php.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  public carrito:any[]=[];
  public precio :number = 0;
  public user:any;

  constructor(private apiSV:ApiPhpService, private router:Router) { }

  ngOnInit(): void {
    this.carrito = JSON.parse(localStorage.getItem('carrito'));
    this.calcularPrecio();
  }

  calcularPrecio(){
    this.carrito = JSON.parse(localStorage.getItem('carrito'));
    let cont:number=0;
    for (let i = 0; i < this.carrito.length;i++){
      cont = cont + parseInt(this.carrito[i].precio);
    }
    this.precio = cont;
  }

  insertarVenta(){
    this.user = JSON.parse(localStorage.getItem('user'));
    for (let i = 0; i < this.carrito.length;i++){
      let venta = {
        id_usuario: this.user.id,
        id_elec: this.carrito[i].id,
        precio: this.carrito[i].precio
      }
      this.apiSV.insertarVenta(venta).subscribe();
    }
    this.carrito = [];
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
    this.router.navigateByUrl('/home');
  }

}
