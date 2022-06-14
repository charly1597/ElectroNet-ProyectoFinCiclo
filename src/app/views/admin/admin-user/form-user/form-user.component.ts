import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ApiPhpService } from 'src/app/services/api-php.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  @Input() user: any;
  loginForm: FormGroup;
  idUser:any = 0;

  constructor(private apiSv : ApiPhpService, public activatedRoute: ActivatedRoute, private router:Router) {
    this.loginForm = new FormGroup({
      email   : new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      id   : new FormControl(''),
    });
  }

  ngOnInit(): void {
    if(this.activatedRoute.snapshot.paramMap.get('id')){
    this.activatedRoute.params.pipe(switchMap (({id}) => this.apiSv.obtenerUsuario(id))
      ).subscribe(async usuario => {
        console.log(usuario)
        this.user = usuario;
        this.idUser = this.activatedRoute.snapshot.paramMap.get('id');
      });
    }
  }

  registro(){
    if(this.apiSv.signUp(this.loginForm.value).subscribe()){
      this.router.navigateByUrl('/admin/users');
    }else{
      window.location.reload();
    }
  }

  editar(){
    if(this.apiSv.updateUsuario(this.loginForm.value).subscribe()){
      this.router.navigateByUrl('/admin/users');
    }else{
      window.location.reload();
    }

  }

}
