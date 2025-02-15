import { Injectable } from '@angular/core';
import { ICartItem } from '../products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: ICartItem[] = []

  constructor() { }

  getterCart() {
    this.items = JSON.parse(localStorage.getItem("cart") || "[]");
    return this.items;
  };

  addToCart(product: ICartItem) {
    this.items.push(product);
    localStorage.setItem("cart", JSON.stringify(this.items));
  };

  removeFromCart(id: number) {
    this.items = this.items.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(this.items));
  }

  clearCart() {
    this.items = [];
    localStorage.removeItem("cart");
  }
}
