import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IProduct } from '../../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: IProduct[] | undefined;
  isHovered: { [key: number]: boolean } = {};

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const products = this.productsService.getAll()
    this.route.queryParamMap.subscribe(params => {
      const description = params.get('description')?.toLowerCase();

      if(description) {
        this.products = products.filter(p => p.description.toLowerCase().includes(description));
        return;
      }

      this.products = products;
    })
  }

  onMouseEnter(productId: number) {
    this.isHovered[productId] = true;
  }

  onMouseLeave(productId: number) {
    this.isHovered[productId] = false;
  }

}
