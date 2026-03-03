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
import { authAdminGuard } from './guards/auth-admin-guard';
import { authUserGuard } from './guards/auth-user-guard';

export const routes: Routes = [
    { path: '', component: MainProducts, resolve: { items: ProductResolver } },
    { path: 'admin-products', component: AdminProducts, resolve: { items: ProductResolver }, canActivate: [authAdminGuard] },
    { path: 'product-mng', component: ProductMng, canActivate: [authAdminGuard]},
    { path: 'product-mng/:id', component: ProductMng, canActivate: [authAdminGuard] },
    { path: 'cart', component: Cart, resolve: { items: CartResolver }, canActivate: [authUserGuard] },
    { path: 'product-detail/:id', component: ProductDetail, resolve: { product: ProductDetailResolver }, canActivate: [authUserGuard] },
    { path: 'admin-users', component: AdminUsers, resolve: { items: UserResolver }, canActivate: [authAdminGuard] },
    { path: 'user-mng', component: UserMng, canActivate: [authAdminGuard] },
    { path: 'user-mng/:id', component: UserMng, canActivate: [authAdminGuard] },
    { path: 'login', component: Login },
];
