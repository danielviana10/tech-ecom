import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsService } from '../../products.service';
import { IProduct } from '../../../products';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product: IProduct | undefined;
  quantity: number = 1;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));
    this.product = this.productsService.getOne(id)
  }
}
