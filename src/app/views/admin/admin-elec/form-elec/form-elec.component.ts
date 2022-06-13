import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiPhpService } from 'src/app/services/api-php.service';
import { switchMap } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-elec',
  templateUrl: './form-elec.component.html',
  styleUrls: ['./form-elec.component.css']
})
export class FormElecComponent implements OnInit {
  @Input() electrodomestico: any;
  loginForm: FormGroup;
  idElec:any = 0;

  constructor(public activatedRoute: ActivatedRoute, private apiSv : ApiPhpService,) {
    this.loginForm = new FormGroup({
      id   : new FormControl('', [Validators.required, Validators.email]),
      nombre: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      imagen: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(switchMap (({id}) => this.apiSv.getProduct(id))
      ).subscribe(async product => {
        console.log(product)
        this.electrodomestico = product;
        this.idElec = this.activatedRoute.snapshot.paramMap.get('id');
      });(
      console.log(this.activatedRoute.snapshot.paramMap.get('id')));
      window.scroll(0,0);
  }

  editar(){

  }

}
