import { Component, OnInit } from '@angular/core';
import { ApiPhpService } from 'src/app/services/api-php.service';

@Component({
  selector: 'app-admin-elec',
  templateUrl: './admin-elec.component.html',
  styleUrls: ['./admin-elec.component.css']
})
export class AdminElecComponent implements OnInit {
  products:any[]=[];
  displayedColumns: string[] = ['id', 'nombre', 'precio', 'categoria', 'borrar', 'editar'];

  constructor(private apiSv : ApiPhpService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.apiSv.getProducts().subscribe(productos => {
      console.log(productos);
      this.products = productos;
    })
  }

}
