import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule, CommonModule, RouterModule],
  standalone: true,
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  description: string = '';

  constructor(
    private router: Router,
    public cartService: CartService
  ) {

  }

  search() {
    if(this.description) {
      this.router.navigate(['/products'], {queryParams: {description: this.description}});
      return;
    }

    this.router.navigate(['/products']);
  }

}
