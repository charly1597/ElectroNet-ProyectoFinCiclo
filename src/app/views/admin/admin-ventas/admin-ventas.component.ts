import { Component, OnInit } from '@angular/core';
import { ApiPhpService } from 'src/app/services/api-php.service';

@Component({
  selector: 'app-admin-ventas',
  templateUrl: './admin-ventas.component.html',
  styleUrls: ['./admin-ventas.component.css']
})
export class AdminVentasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'email', 'rol', 'borrar', 'editar'];
  ventas:any[]=[];

  constructor(private apiSv : ApiPhpService) { }

  ngOnInit(): void {
    this.obtenerVentas();
    window.scroll(0,0);

  }

  obtenerVentas(){
    this.apiSv.obtenerTodasVentas().subscribe(ventas => {
      this.ventas = ventas;
    })
  }

}
