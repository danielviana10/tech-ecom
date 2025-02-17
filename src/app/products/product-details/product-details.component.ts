import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsService } from '../../products.service';
import { ICartItem, IProduct } from '../../../products';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../notification.service';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  product: IProduct | undefined;
  quantity: number = 1;
  backgroundColor: string = '';

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get('id'));
    this.product = this.productsService.getOne(productId);

    const state = window.history.state;
    if (state && state.backgroundColor) {
      this.backgroundColor = state.backgroundColor;
    }
  }

  addToCart() {
    if (!this.product) return;
    if (this.quantity > this.product.stock) {
      this.notificationService.notify('Not enough stock available');
      return;
    }
    this.notificationService.notify('The product has been added to the cart');
    const product: ICartItem = {
      ...this.product,
      quantity: this.quantity,
      backgroundColor: this.backgroundColor,
    };
    this.cartService.addToCart(product);
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  incrementQuantity() {
    if (this.quantity < (this.product?.stock ?? 0)) {
      this.quantity++;
    }
  }
}
