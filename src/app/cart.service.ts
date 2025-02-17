import { Injectable } from '@angular/core';
import { ICartItem } from '../products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: ICartItem[] = [];

  constructor() {}

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
    this.items = this.items.filter((item) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  clearCart() {
    this.items = [];
    localStorage.removeItem('cart');
  }
}
