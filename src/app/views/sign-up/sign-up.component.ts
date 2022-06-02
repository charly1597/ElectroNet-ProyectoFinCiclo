import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiPhpService } from 'src/app/services/api-php.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private apiSv:ApiPhpService, private router:Router) {
    this.loginForm = new FormGroup({
      email   : new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required])
    });
   }

  ngOnInit(): void {
  }

  registro(){
    if(this.apiSv.signUp(this.loginForm.value).subscribe()){
      this.router.navigateByUrl('/login');
    }else{
      window.location.reload();
    }
  }

}
