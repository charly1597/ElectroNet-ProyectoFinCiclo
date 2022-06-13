import { Component, OnInit } from '@angular/core';
import { ApiPhpService } from 'src/app/services/api-php.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  products:any[]=[];
  products2:any[]=[];

  constructor(public apiSv : ApiPhpService) { }

  ngOnInit(): void {
    this.getProducts();
    window.scroll(0,0);
  }

  getProducts(){
    this.apiSv.getProducts().subscribe(productos => {
      console.log(productos);
      this.products = productos;
      this.products = this.shuffleArray(this.products);
      this.products2 = this.products.slice(0,8);
    })
  }

  shuffleArray(array: any){
    return array.sort(()=> Math.random() - 0.3);
  }

}
