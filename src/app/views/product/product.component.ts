import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ApiPhpService } from 'src/app/services/api-php.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() electrodomestico: any;
  loginForm: FormGroup;
  user:any;
  comentarios:any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private apiSv : ApiPhpService, private router:Router) {
    this.loginForm = new FormGroup({
      descripcion: new FormControl('',[Validators.required])
    });
   }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));

    this.activatedRoute.params.pipe(switchMap (({id}) => this.apiSv.getProduct(id))
      ).subscribe(async product => {
        console.log(product)
        this.electrodomestico = product;
      });
      this.obtenerComentarios();
      //this.limpiarComentarios();
      window.scroll(0,0);
  }

  agregarProducto(elec:any){
    let carrito:any = JSON.parse(localStorage.getItem('carrito'));
    let producto={
      id:this.activatedRoute.snapshot.paramMap.get('id'),
      nombre:elec.nombre,
      precio:elec.precio,
      imagen:elec.imagen,
      categoria:elec.categoria
    }
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    console.log(carrito);
    this.router.navigateByUrl('/carrito').then(() => {
      window.location.reload();
    });
  }

  obtenerComentarios(){
    this.apiSv.obtenerComentariosProducto(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(comentarios => {
      this.comentarios = comentarios
      console.log(comentarios)
    })
  }

  limpiarComentarios(){
    const comentarios = this.comentarios;
    const limpio = [];
    for(var i = 0; i < comentarios.length; i++) {

      const elemento = comentarios[i];

      if (!limpio.includes(comentarios[i].email)) {
        limpio.push(elemento);
      }
    }
    this.comentarios = limpio;
  }

  volver(){
    history.back();
  }

  post(){
    console.log(this.loginForm.value.descripcion);
    const comentario = {
      id_usuario: this.user.id,
      id_elec:this.activatedRoute.snapshot.paramMap.get('id'),
      comentario:this.loginForm.value.descripcion
    }
    this.apiSv.insertarComentario(comentario).subscribe(()=> {
      this.loginForm.reset();
      this.obtenerComentarios();
    });

  }

}
