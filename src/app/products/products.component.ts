import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IProduct } from '../../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: IProduct[] | undefined;
  isHovered: { [key: number]: boolean } = {};

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const allProducts = this.productsService.getAll();
    this.route.queryParamMap.subscribe((params) => {
      const description = params.get('description')?.toLowerCase();

      if (description) {
        this.products = allProducts.filter((p) =>
          p.description.toLowerCase().includes(description)
        );
      } else {
        this.products = allProducts;
      }
    });
  }

  onMouseEnter(productId: number) {
    this.isHovered[productId] = true;
  }

  onMouseLeave(productId: number) {
    this.isHovered[productId] = false;
  }

  trackByProductId(index: number, product: IProduct): number {
    return product.id;
  }

  getBackgroundColor(index: number): string {
    if (index % 3 === 0) {
      return '#81B9DD';
    } else if (index % 3 === 1) {
      return '#A1FBC6';
    } else {
      return '#F7E0D8';
    }
  }

  navigateToProduct(product: IProduct, index: number) {
    const backgroundColor = this.getBackgroundColor(index);
    this.router.navigate(['/products', product.id], {
      state: { backgroundColor },
    });
  }
}
