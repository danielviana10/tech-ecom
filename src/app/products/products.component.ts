import { Component, HostListener } from '@angular/core';
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
  products: IProduct[] = [];
  isHovered: { [key: number]: boolean } = {};
  private currentPage = 1;
  private pageSize = 6;
  public allProducts: IProduct[] = [];
  private isLoading = false;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const storedProducts = localStorage.getItem('products');

    if (storedProducts) {
      this.allProducts = JSON.parse(storedProducts);
    } else {
      this.allProducts = this.productsService.getAll();
    }

    this.loadProducts();
  }

  loadProducts() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    const newProducts = this.allProducts.slice(startIndex, endIndex);

    setTimeout(() => {
      this.products = [...this.products, ...newProducts];
      this.currentPage++;
      this.isLoading = false;
    }, 500);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (this.isNearBottom() && !this.isLoading) {
      this.isLoading = true;
      this.loadProducts();
    }
  }

  isNearBottom(): boolean {
    const scrollY = window.scrollY;
    const visibleHeight = window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;
    const threshold = 200;

    return scrollY + visibleHeight >= pageHeight - threshold;
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
