import { Component, OnInit } from '@angular/core';
import { ApiPhpService } from 'src/app/services/api-php.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  users:any[]=[];
  displayedColumns: string[] = ['id', 'nombre', 'email', 'rol', 'borrar', 'editar'];

  constructor(private apiSv : ApiPhpService) { }

  ngOnInit(): void {
    this.obtenerUsers();
    window.scroll(0,0);
  }

  obtenerUsers(){
    this.apiSv.obtenerTodosUsuarios().subscribe(users => {
      this.users = users;
    })
  }

}
