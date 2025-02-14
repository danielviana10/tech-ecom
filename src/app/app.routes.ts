import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'products',
    loadComponent: () => import('./products/products.component').then(m => m.ProductsComponent),
  },
  {
    path: 'products/:id',
    loadComponent: () => import('./products/product-details/product-details.component').then(m => m.ProductDetailsComponent),
  },
  {
    path: '', redirectTo: 'products', pathMatch: 'full'
  },
  {
    path: '**', component: NotFoundComponent
  }
];
