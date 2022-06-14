import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiPhpService } from 'src/app/services/api-php.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'borrar', 'editar'];
  categorias:any[]=[];

  constructor(private apiSv :ApiPhpService, private router:Router, private confirmDialog: MatDialog) { }

  ngOnInit(): void {
    this.obtenerCategorias();
    window.scroll(0,0);
  }

  obtenerCategorias(){
    this.apiSv.obtenerCategorias().subscribe(categorias => {
      this.categorias = categorias
    })
  }

  goToCategory(id: number){
    this.router.navigate(['admin/category/form/', id]);
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
    this.apiSv.borrarCategoria(id).subscribe(() => {
      this.obtenerCategorias();
    });
  }


}
