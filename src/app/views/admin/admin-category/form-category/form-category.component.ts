import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiPhpService } from 'src/app/services/api-php.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css']
})
export class FormCategoryComponent implements OnInit {
  @Input() categoria: any;
  loginForm: FormGroup;

  constructor(private apiSv : ApiPhpService, public activatedRoute: ActivatedRoute, private router:Router) {
    this.loginForm = new FormGroup({
      categoria: new FormControl('', [Validators.required]),
      id   : new FormControl(''),
    });
   }

  ngOnInit(): void {
    if(this.activatedRoute.snapshot.paramMap.get('id')){
      this.activatedRoute.params.pipe(switchMap (({id}) => this.apiSv.obtenerCategoria(id))
        ).subscribe(async categoria => {
          this.categoria = categoria;
        });
      }
  }

  registro(){
    if(this.apiSv.insertarCategoria(this.loginForm.value).subscribe()){
      this.router.navigateByUrl('/admin/category');
    }else{
      window.location.reload();
    }
  }

  editar(){
    if(this.apiSv.updateCategoria(this.loginForm.value).subscribe()){
      this.router.navigateByUrl('/admin/category');
    }else{
      window.location.reload();
    }

  }

}
