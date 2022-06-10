import { Component, OnInit } from '@angular/core';
import { ApiPhpService } from 'src/app/services/api-php.service';

@Component({
  selector: 'app-my-shopping',
  templateUrl: './my-shopping.component.html',
  styleUrls: ['./my-shopping.component.css']
})
export class MyShoppingComponent implements OnInit {
  public ventas:any [] = []

  constructor(private apiSv:ApiPhpService) { }

  ngOnInit(): void {
    this.obtenerVentas();
  }

  obtenerVentas(){
    this.apiSv.obtenerVentasUsuario().subscribe(ventas => {
      console.log(ventas)
      this.ventas = ventas;
    })
  }

}
