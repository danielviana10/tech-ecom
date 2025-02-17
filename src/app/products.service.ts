import { Injectable } from '@angular/core';
import { IProduct, products } from '../products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: IProduct[] = products;

  constructor() {
    // Se não houver produtos no localStorage, salva os produtos iniciais
    if (!localStorage.getItem('products')) {
      localStorage.setItem('products', JSON.stringify(this.products));
    }
  }

  getAll(): IProduct[] {
    const storedProducts = localStorage.getItem('products');
    return storedProducts ? JSON.parse(storedProducts) : this.products;
  }

  getOne(id: number): IProduct | undefined {
    const products = this.getAll(); // Buscar do localStorage
    return products.find((product) => product.id === id);
  }

  updateStock(id: number, quantity: number) {
    const products = this.getAll();
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, stock: product.stock + quantity };
      }
      return product;
    });

    localStorage.setItem('products', JSON.stringify(updatedProducts));
  }

  saveProduct(product: IProduct) {
    const products = this.getAll();
    const updatedProducts = products.map((p) =>
      p.id === product.id ? product : p
    );
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  }
}
