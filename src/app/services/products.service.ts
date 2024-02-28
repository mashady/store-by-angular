import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Datum } from '../interfaces/products';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _HttpClient: HttpClient) {}
  data: Datum[] = [];
  hasData: boolean = false;
  setData(data: Datum[]) {
    this.data = data;
  }
  getData() {
    return this.data;
  }
  getProducts() {
    this.hasData = true;
    return this._HttpClient.get(
      'https://ecommerce.routemisr.com/api/v1/products'
    );
  }
  getProductById(id: string): Observable<any> {
    return this._HttpClient.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );
  }
}
