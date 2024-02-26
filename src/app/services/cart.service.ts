import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart, Data } from '../interfaces/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  headers: any = {
    token: localStorage.getItem('userToken') || '',
  };
  cartLength = new BehaviorSubject(0);
  userCartData = new BehaviorSubject(null);
  constructor(private _HttpClient: HttpClient) {
    this.getUserCart().subscribe({
      next: (res: any) => {
        this.cartLength.next(res.numOfCartItems); // we didnot need this any more cause we can get it from our userDataCart
        this.userCartData.next(res.data); // deal with it as a behavior when add new items update it
      },
    });
  }
  getUserCart() {
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart', {
      headers: this.headers,
    });
  }
  addProductToCart(productId: string) {
    return this._HttpClient.post(
      'https://ecommerce.routemisr.com/api/v1/cart',
      { productId: productId },
      { headers: this.headers }
    );
  }
  removeProductById(productId: string) {
    return this._HttpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      {
        headers: this.headers,
      }
    );
  }
  updateCartCount(productId: string, count: number) {
    return this._HttpClient.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      { count: count },
      { headers: this.headers }
    );
  }
  clearCart() {
    return this._HttpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/`,
      {
        headers: this.headers,
      }
    );
  }
}
