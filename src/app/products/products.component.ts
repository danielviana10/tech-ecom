import { Component, HostListener, OnInit } from '@angular/core';
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
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];
  isHovered: { [key: number]: boolean } = {};
  public isMobile = window.innerWidth <= 768;
  private currentPage = 1;
  private pageSize = 6;
  public allProducts: IProduct[] = [];
  public isLoading = false;
  private searchDescription: string = '';
  public isFiltering: boolean = false;

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

    this.route.queryParams.subscribe((params) => {
      this.searchDescription = params['description'] || '';
      this.isFiltering = !!this.searchDescription;
      this.resetProducts();
      this.loadProducts();
    });
  }

  resetProducts() {
    this.products = [];
    this.currentPage = 1;
  }

  loadProducts() {
    let filteredProducts = this.allProducts;
    if (this.searchDescription) {
      filteredProducts = this.allProducts.filter((product) =>
        product.description
          .toLowerCase()
          .includes(this.searchDescription.toLowerCase())
      );
    }

    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    const newProducts = filteredProducts.slice(startIndex, endIndex);

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

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = window.innerWidth <= 768;
  }

  isNearBottom(): boolean {
    const scrollY = window.scrollY;
    const visibleHeight = window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;
    const threshold = 300;

    return scrollY + visibleHeight >= pageHeight - threshold;
  }

  onMouseEnter(productId: number) {
    if (!this.isMobile) {
      this.isHovered[productId] = true;
    }
  }

  onMouseLeave(productId: number) {
    if (!this.isMobile) {
      this.isHovered[productId] = false;
    }
  }

  trackByProductId(index: number, product: IProduct): number {
    return product.id;
  }

  getBackgroundColor(index: number): string {
    if (index % 3 === 0) {
      return 'var(--blue)';
    } else if (index % 3 === 1) {
      return 'var(--green)';
    } else {
      return 'var(--pink)';
    }
  }

  navigateToProduct(product: IProduct, index: number) {
    const backgroundColor = this.getBackgroundColor(index);
    this.router.navigate(['/products', product.id], {
      state: { backgroundColor },
    });

    window.scrollTo(0, 0);
  }
}
