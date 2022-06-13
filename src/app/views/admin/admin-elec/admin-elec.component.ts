import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiPhpService } from 'src/app/services/api-php.service';

@Component({
  selector: 'app-admin-elec',
  templateUrl: './admin-elec.component.html',
  styleUrls: ['./admin-elec.component.css']
})
export class AdminElecComponent implements OnInit {
  products:any[]=[];
  displayedColumns: string[] = ['id', 'nombre', 'precio', 'categoria', 'borrar', 'editar'];

  constructor(private apiSv : ApiPhpService, private router:Router) { }

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
    this.router.navigate(['admin/electrodomesticos/form/', id]);
  }

}
