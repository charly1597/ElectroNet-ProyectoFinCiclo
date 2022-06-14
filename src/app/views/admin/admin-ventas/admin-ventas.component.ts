import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiPhpService } from 'src/app/services/api-php.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-admin-ventas',
  templateUrl: './admin-ventas.component.html',
  styleUrls: ['./admin-ventas.component.css']
})
export class AdminVentasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'email', 'rol', 'borrar'];
  ventas:any[]=[];

  constructor(private apiSv : ApiPhpService, private confirmDialog: MatDialog) { }

  ngOnInit(): void {
    this.obtenerVentas();
    window.scroll(0,0);

  }

  obtenerVentas(){
    this.apiSv.obtenerTodasVentas().subscribe(ventas => {
      this.ventas = ventas;
    })
  }

  showDialog(id: string): void {
    const dialogo = this.confirmDialog
      .open(ConfirmDialogComponent, {
        width: '60%',
        maxWidth: '400px',
        data: {
          id: id,
          title: "Confirmacion de borrado",
          mensaje: "¿Desea eliminar el elemento seleccionado?"
        }
      })
      dialogo.afterClosed()
      .subscribe(result => {
        if (result) {
          this.borrar(id)
        }
      });
  }

  borrar(id:any){
    this.apiSv.borrarVenta(id).subscribe(() => {
      this.obtenerVentas();
    });
  }

}
