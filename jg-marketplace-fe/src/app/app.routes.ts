import { Routes } from '@angular/router';
import { AdminProducts } from './admin-products/admin-products';
import { MainProducts } from './main-products/main-products';
import { ProductResolver } from './main-products/product-resolver';
import { ProductMng } from './product-mng/product-mng';
import { Cart } from './cart/cart';
import { CartResolver } from './cart/cart-resolver';
import { ProductDetail } from './product-detail/product-detail';
import { ProductDetailResolver } from './product-detail/product-detail-resolver';
import { AdminUsers } from './admin-users/admin-users';
import { UserMng } from './user-mng/user-mng';
import { UserResolver } from './admin-users/user-resolver';
import { Login } from './login/login';

export const routes: Routes = [
    { path: '', component: MainProducts, resolve: { items: ProductResolver } },
    { path: 'admin-products', component: AdminProducts, resolve: { items: ProductResolver } },
    { path: 'product-mng', component: ProductMng },
    { path: 'product-mng/:id', component: ProductMng },
    { path: 'cart', component: Cart, resolve: { items: CartResolver } },
    { path: 'product-detail/:id', component: ProductDetail, resolve: { product: ProductDetailResolver }},
    { path: 'admin-users', component: AdminUsers, resolve: { items: UserResolver } },
    { path: 'user-mng', component: UserMng },
    { path: 'user-mng/:id', component: UserMng },
    { path: 'login', component: Login },
];
