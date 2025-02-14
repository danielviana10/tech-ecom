import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IProduct } from '../../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: IProduct[] | undefined;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.products = this.productsService.getAll();
  }

}
