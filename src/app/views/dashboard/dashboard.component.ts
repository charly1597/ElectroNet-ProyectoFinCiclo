import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiPhpService } from 'src/app/services/api-php.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showMenu = false;
  isLogged = false;
  user:any;
  public carrito:any[]=[];

  constructor(private apiSv:ApiPhpService, private router:Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user){
      this.isLogged=true;
    }
    return this.carrito = JSON.parse(localStorage.getItem('carrito'));
  }

  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  logout(){
    this.isLogged = false;
    this.apiSv.logOut();
  }

  route(){
    return this.router.url
  }

  obtenerCarrito(){
    return this.carrito = JSON.parse(localStorage.getItem('carrito'));
  }

}
