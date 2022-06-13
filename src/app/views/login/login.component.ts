import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiPhpService } from 'src/app/services/api-php.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorTxt:string;

  constructor(private apiSv : ApiPhpService, private router: Router) {
    this.loginForm = new FormGroup({
      email   : new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
   }

  ngOnInit(): void {
    window.scroll(0,0);
  }

  login(){
    this.apiSv.findByEmailAndPass(this.loginForm.value).subscribe(usuario => {
      if(usuario){
        console.log(usuario)
        let carrito:any[]=[];
        localStorage.setItem('user',JSON.stringify(usuario));
        localStorage.setItem('carrito',JSON.stringify(carrito));
        this.router.navigateByUrl('/home').then(() => {
          window.location.reload();
        });
      }else{
        this.errorTxt = 'Usuario o contraseña incorrectos';
      }
    })
  }
}
