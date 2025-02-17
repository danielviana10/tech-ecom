import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { ICartItem } from '../../products';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartItems: ICartItem[] = [];
  totalPrice: number = 0;

  constructor(
    public cartService: CartService,
    private router: Router,
    private notificationService: NotificationService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getterCart();
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }

  decrementCartItemQuantity(cartItem: any): void {
    if (cartItem.quantity > 1) {
      cartItem.quantity--;
      this.calculateTotalPrice();
    }
  }

  incrementCartItemQuantity(cartItem: any): void {
    if (cartItem.quantity < cartItem.stock) {
      cartItem.quantity++;
      this.calculateTotalPrice();
    }
  }

  removeFromCart(id: number): void {
    this.cartItems = this.cartItems.filter((item) => item.id !== id);
    const cartItem = this.cartService.removeFromCart(id);
    this.calculateTotalPrice();
    this.notificationService.notify(
      'The ' + cartItem?.description + ' has been removed from the cart.'
    );
  }

  buyItems() {
    this.notificationService.notify('You have completed your purchase!');
    const cartItems = this.cartService.getterCart();

    cartItems.forEach((item) => {
      const product = this.productsService
        .getAll()
        .find((p) => p.id === item.id);
      if (product) {
        product.stock -= item.quantity;
        this.productsService.saveProduct(product);
      }
    });

    this.cartService.clearCart();
    this.router.navigate(['products']);
  }
}
