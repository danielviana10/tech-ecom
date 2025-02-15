import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(
    public cartService: CartService
  ) {

  }

}
