import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private activatedRoute: ActivatedRoute, private apiSv : ApiPhpService, private router:Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.pipe(switchMap (({id}) => this.apiSv.getProduct(id))
      ).subscribe(async product => {
        console.log(product)
        this.electrodomestico = product;
      });(
      console.log(this.activatedRoute.snapshot.paramMap.get('id')));
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

}
