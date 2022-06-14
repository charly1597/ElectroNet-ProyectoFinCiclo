import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiPhpService } from 'src/app/services/api-php.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  users:any[]=[];
  displayedColumns: string[] = ['id', 'nombre', 'email', 'rol', 'borrar', 'editar'];

  constructor(private apiSv : ApiPhpService, private router : Router, private confirmDialog: MatDialog) { }

  ngOnInit(): void {
    this.obtenerUsers();
    window.scroll(0,0);
  }

  obtenerUsers(){
    this.apiSv.obtenerTodosUsuarios().subscribe(users => {
      this.users = users;
    })
  }

  goToUser(id: number){
    this.router.navigate(['admin/users/form/', id]);
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
    this.apiSv.borrarUsuario(id).subscribe(() => {
      this.obtenerUsers();
    });
  }

}
