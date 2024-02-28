import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { PorductlistComponent } from './components/porductlist/porductlist.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PaymentsuccessComponent } from './components/paymentsuccess/paymentsuccess.component';
import { HeaderInterceptor } from './header.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrandsComponent,
    ProductsComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    WishlistComponent,
    NavbarComponent,
    NotfoundComponent,
    LoaderComponent,
    CategoryComponent,
    ProductdetailsComponent,
    HeaderComponent,
    NewsletterComponent,
    ForgetpasswordComponent,
    PorductlistComponent,
    CategoryListComponent,
    PaymentsuccessComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
