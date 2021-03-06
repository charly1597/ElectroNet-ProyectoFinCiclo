import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiPhpService } from 'src/app/services/api-php.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:any;
  products:any[]=[];
  products2:any[]=[];

  constructor(public apiSv : ApiPhpService, public router:Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getProducts();
    window.scroll(0,0);
  }

  getProducts(){
    this.apiSv.getProducts().subscribe(productos => {
      this.products = productos;
      this.products = this.shuffleArray(this.products);
      this.products2 = this.products.slice(0,8);
    })
  }

  shuffleArray(array: any){
    return array.sort(()=> Math.random() - 0.3);
  }

  goToProduct(id: number){
    this.router.navigate(['producto/', id]);
  }


}
