import { Injectable } from '@angular/core';
import { IProduct, products } from '../products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: IProduct[] = products;

  constructor() {}

  getAll() {
    return this.products;
  }

  getOne(id: number) {
    return this.products.find((product) => product.id === id);
  }

  updateStock(id: number, quantity: number) {
    const product = this.products.find((p) => p.id === id);
    if (product) {
      product.stock += quantity;
    }
  }
}
