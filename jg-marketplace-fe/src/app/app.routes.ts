import { Routes } from '@angular/router';
import { AdminProducts } from './admin-products/admin-products';
import { MainProducts } from './main-products/main-products';
import { ProductResolver } from './main-products/product-resolver';

export const routes: Routes = [
    { path: '', component: MainProducts, resolve: { items: ProductResolver } },
    { path: 'admin-products', component: AdminProducts },
];
