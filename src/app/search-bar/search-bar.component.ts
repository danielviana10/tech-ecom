import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  description: string = '';

  constructor(
    private router: Router
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
