import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ApiPhpService } from 'src/app/services/api-php.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() electrodomestico: any;

  constructor(private activatedRoute: ActivatedRoute, private apiSv : ApiPhpService) { }

  ngOnInit(): void {

    this.activatedRoute.params.pipe(switchMap (({id}) => this.apiSv.getProduct(id))
      ).subscribe(async product => {
        this.electrodomestico = product;
      });
  }

}
