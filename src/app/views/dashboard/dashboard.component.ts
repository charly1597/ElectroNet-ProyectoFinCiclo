import { Component, OnInit } from '@angular/core';
import { ApiPhpService } from 'src/app/services/api-php.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showMenu = false;
  isLogged = false;
  user:any;

  constructor(private apiSv:ApiPhpService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user){
      this.isLogged=true;
    }
  }

  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  logout(){
    this.isLogged = false;
    this.apiSv.logOut();
  }

}
