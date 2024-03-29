import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { CartService } from './cart.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData = new BehaviorSubject(null);
  constructor(
    public _HttpClient: HttpClient,
    private _router: Router,
    public CartService: CartService
  ) {
    if (localStorage.getItem('userToken')) {
      this.decode();
    }
  }

  decode() {
    let userToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodeToken: any = jwtDecode(userToken);
    this.userData.next(decodeToken);
  }
  login(data: any) {
    return this._HttpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signin',
      data
    );
  }
  register(data: any) {
    return this._HttpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signup',
      data
    );
  }

  forget(data: any): Observable<any> {
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,
      data
    );
  }
  logout() {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this.CartService.cartLength.next(0);
    this.CartService.userCartData.next(null);
    this._router.navigate(['/login']);
  }
}
