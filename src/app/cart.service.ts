import { Injectable } from '@angular/core';
import { ICartItem } from '../products';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: ICartItem[] = [];

  constructor(private productsService: ProductsService) {}

  getterCart() {
    this.items = JSON.parse(localStorage.getItem('cart') || '[]');
    return this.items;
  }

  addToCart(product: ICartItem) {
    this.items = this.getterCart();

    const existingItem = this.items.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity = Math.min(
        existingItem.quantity + product.quantity,
        existingItem.stock
      );
    } else {
      this.items.push({ ...product });
    }
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  removeFromCart(id: number) {
    const itemToRemove = this.items.find((item) => item.id === id);

    if (itemToRemove) {
      this.productsService.updateStock(id, itemToRemove.quantity);
      this.items = this.items.filter((item) => item.id !== id);
      localStorage.setItem('cart', JSON.stringify(this.items));
      return itemToRemove;
    }
    return null;
  }

  clearCart() {
    this.items = [];
    localStorage.removeItem('cart');
  }
}
