import { Component, OnInit } from '@angular/core';
import { ApiPhpService } from 'src/app/services/api-php.service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'borrar', 'editar'];
  categorias:any[]=[];

  constructor(private apiSv :ApiPhpService) { }

  ngOnInit(): void {
    this.obtenerCategorias();
    window.scroll(0,0);
  }

  obtenerCategorias(){
    this.apiSv.obtenerCategorias().subscribe(categorias => {
      this.categorias = categorias
    })
  }


}
