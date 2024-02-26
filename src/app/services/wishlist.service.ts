import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  headers: any = {
    token: localStorage.getItem('userToken') || '',
  };
  wishArray: any = []; //for ids  *** we have access to this prop to handle hceck array of ids
  hasData: boolean = false;
  public data: any[] = [];
  setData(data: any) {
    this.data = data;
  }
  constructor(private _HttpClient: HttpClient) {
    this.getUserWishlist().subscribe({
      next: (res) => {
        // get ids
        let wishListIds = [];
        // this statement, we will use it on product adding items wish * cart
        for (let i = 0; i < res.data.length; i++) {
          wishListIds.push(res.data[i]._id);
        }
        this.wishArray = wishListIds;
        this.setData(res.data);
        console.log(res.data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getData() {
    return this.data || [];
  }
  getUserWishlist(): Observable<any> {
    this.hasData = true;
    return this._HttpClient.get(
      `https://route-ecommerce.onrender.com/api/v1/wishlist`,
      {
        headers: this.headers,
      }
    );
  }
  addProductToWishlist(productId: string) {
    return this._HttpClient.post(
      `https://route-ecommerce.onrender.com/api/v1/wishlist`,
      { productId: productId },
      { headers: this.headers }
    );
  }
  removeProductFromWishList(productId: string) {
    return this._HttpClient.delete(
      `https://route-ecommerce.onrender.com/api/v1/wishlist/${productId}`,
      { headers: this.headers }
    );
  }
}
