import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    // Animação para a imagem
    trigger('fadeInCenter', [
      state('void', style({ opacity: 0, transform: 'scale(0.5)' })), // Estado inicial
      transition(':enter', [
        animate('1s ease-out', style({ opacity: 1, transform: 'scale(1)' })) // Animação ao entrar
      ])
    ]),
    // Animação para o texto "Everthing"
    trigger('slideInLeft', [
      state('void', style({ opacity: 0, transform: 'translateX(-100%)' })), // Estado inicial
      transition(':enter', [
        animate('1s ease-out', style({ opacity: 1, transform: 'translateX(0)' })) // Animação ao entrar
      ])
    ]),
    // Animação para o texto "you need"
    trigger('slideInRight', [
      state('void', style({ opacity: 0, transform: 'translateX(100%)' })), // Estado inicial
      transition(':enter', [
        animate('1s ease-out', style({ opacity: 1, transform: 'translateX(0)' })) // Animação ao entrar
      ])
    ])
  ]
})
export class HomeComponent {}
