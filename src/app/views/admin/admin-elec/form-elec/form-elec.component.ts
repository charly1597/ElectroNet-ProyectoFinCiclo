import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiPhpService } from 'src/app/services/api-php.service';
import { switchMap } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/views/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-form-elec',
  templateUrl: './form-elec.component.html',
  styleUrls: ['./form-elec.component.css']
})
export class FormElecComponent implements OnInit {
  @Input() electrodomestico: any;
  loginForm: FormGroup;
  idElec:any = 0;
  selected:any = '';
  categorias:any[]=[];

  constructor(public activatedRoute: ActivatedRoute, private apiSv : ApiPhpService, private router:Router, private confirmDialog: MatDialog,) {
    this.loginForm = new FormGroup({
      id   : new FormControl(''),
      nombre: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      imagen: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    if(this.activatedRoute.snapshot.paramMap.get('id')){
    this.activatedRoute.params.pipe(switchMap (({id}) => this.apiSv.getProduct(id))
      ).subscribe(async product => {
        this.electrodomestico = product;
        this.idElec = this.activatedRoute.snapshot.paramMap.get('id');
        this.selected = this.electrodomestico.id;
        this.obtenerCategorias();
      });
    }
    this.obtenerCategorias();
    window.scroll(0,0);

  }

  editar(){
    if(this.apiSv.updateProducto(this.loginForm.value).subscribe()){
      this.router.navigateByUrl('/admin/electrodomesticos')
    }else{
      window.location.reload();
    }
  }

  insertar(){
    if(this.apiSv.insertarElectrodomestico(this.loginForm.value).subscribe()){
      this.router.navigateByUrl('/admin/electrodomesticos')
    }else{
      window.location.reload();
    }
  }

  obtenerCategorias(){
    this.apiSv.obtenerCategorias().subscribe(categorias => {
      this.categorias = categorias
    })
  }

}
