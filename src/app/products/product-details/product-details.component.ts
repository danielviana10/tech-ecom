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
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product: IProduct | undefined;
  quantity: number = 1;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get('id'));
    this.product = this.productsService.getOne(productId);
  }

  addToCart() {
    this.notificationService.notify('The product has been added to the card');
    const product: ICartItem = {
      ...this.product!,
      quantity: this.quantity
    };
    this.cartService.addToCart(product);
  }
}
