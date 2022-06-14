import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiPhpService } from 'src/app/services/api-php.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-admin-elec',
  templateUrl: './admin-elec.component.html',
  styleUrls: ['./admin-elec.component.css']
})
export class AdminElecComponent implements OnInit {
  products:any[]=[];
  displayedColumns: string[] = ['id', 'nombre', 'precio', 'categoria', 'borrar', 'editar'];

  constructor(private apiSv : ApiPhpService, private router:Router, private confirmDialog: MatDialog) { }

  ngOnInit(): void {
    this.getProducts();
    window.scroll(0,0);
  }

  getProducts(){
    this.apiSv.getProducts().subscribe(productos => {
      this.products = productos;
    })
  }

  goToProduct(id: number){
    this.router.navigate(['admin/electrodomesticos/form/', id]);
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
    this.apiSv.borrarProducto(id).subscribe(() => {
      this.getProducts();
    });
  }

}
