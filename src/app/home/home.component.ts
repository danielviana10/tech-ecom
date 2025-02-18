import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeInCenter', [
      state('void', style({ opacity: 0, transform: 'scale(0.5)' })),
      transition(':enter', [
        animate('1s ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),

    trigger('slideInLeft', [
      state('void', style({ opacity: 0, transform: 'translateX(-100%)' })),
      transition(':enter', [
        animate(
          '1s ease-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
    ]),

    trigger('slideInRight', [
      state('void', style({ opacity: 0, transform: 'translateX(100%)' })),
      transition(':enter', [
        animate(
          '1s ease-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
    ]),
  ],
})
export class HomeComponent {}
