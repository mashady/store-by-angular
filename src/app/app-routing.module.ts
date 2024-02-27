import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoryComponent } from './components/category/category.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { PaymentsuccessComponent } from './components/paymentsuccess/paymentsuccess.component';
import { ShippingComponent } from './components/shipping/shipping.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'allorders', redirectTo: 'paymentsuccess', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'store home page' },
  {
    path: 'paymentsuccess',
    component: PaymentsuccessComponent,
    title: 'paymentsuccess',
  },
  {
    path: 'shipping/:id',
    component: ShippingComponent,
    title: 'shipping orders',
  },
  { path: 'brands', component: BrandsComponent, title: 'brands' },
  { path: 'categories', component: CategoryComponent, title: 'categories' },
  { path: 'wishlist', component: WishlistComponent, title: 'wishlist' },
  { path: 'product/:id', component: ProductdetailsComponent, title: 'product' },
  { path: 'login', component: LoginComponent, title: 'login' },
  { path: 'register', component: RegisterComponent, title: 'register' },
  {
    path: 'forgetpassword',
    component: ForgetpasswordComponent,
    title: 'forgetpassword',
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'products',
  },
  { path: '**', component: NotfoundComponent, title: 'pagenotfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
