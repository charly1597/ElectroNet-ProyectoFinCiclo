import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiPhpService } from 'src/app/services/api-php.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  pages: number = 1;
  products:any[]=[];
  products2:any[]=[];

  constructor(public apiSv : ApiPhpService, public router : Router) { }

  ngOnInit(): void {
    this.getProducts();
    window.scroll(0,0);
  }

  getProducts(){
    this.apiSv.getProducts().subscribe(productos => {
      console.log(productos);
      this.products = productos;
    })
  }

  goToProduct(id: number){
    this.router.navigate(['producto/', id]);
  }

}
