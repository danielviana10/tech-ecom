import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { ICartItem } from '../../products';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: ICartItem[] = [];
  totalPrice: number = 0;

  constructor(
    public cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getterCart();
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  removeFromCart(id: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
    this.cartService.removeFromCart(id);
    this.calculateTotalPrice();
  }

  buyItems() {
    alert('Você finalizou a sua compra!');
    this.cartService.clearCart()
    this.router.navigate(['products'])
  }
}
