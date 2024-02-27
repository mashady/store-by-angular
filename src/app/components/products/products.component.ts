import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Datum } from 'src/app/interfaces/products';
import { BrandsData } from '../../interfaces/brands';
import { CartService } from '../../services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  constructor(
    private _ProductsService: ProductsService,
    private CartService: CartService,
    public WishlistService: WishlistService
  ) {}
  data: Datum[] = [];
  itemsPerPage = 8;
  currentPage = 1;
  curPage: number = 1; // new way
  pageSize: number = 8; // new way
  totalPages = 0;
  pages: number[] = [1];
  totalItems: number = 0;
  ngOnInit() {
    console.log(document.getElementsByTagName('img'));

    if (this._ProductsService.hasData === true) {
      this.data = this._ProductsService.getData();
      this.totalItems = this.data.length;

      this.totalPages = Math.ceil(this.totalItems / this.pageSize);
      // array of pages as a numbers
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    } else {
      this._ProductsService.getProducts().subscribe({
        next: (res: any) => {
          console.log(res);
          this._ProductsService.setData(res.data);
          this.data = res.data;
          this.totalItems = res.data.length;
          this.totalPages = Math.ceil(this.totalItems / this.pageSize);
          // array of pages as a numbers
          this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
          console.log(res.data.length);
          console.log(this._ProductsService.getData());
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
  numberOfPages() {
    return Math.ceil(this.data.length / this.pageSize);
  }
  get PaginatedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    return this.data.slice(start, end);
  }
  changePage(n: number) {
    console.log(n);
    this.currentPage = n;
  }
  addProductToCart(productId: string) {
    // we will create a condition here after subscribe the data on the cart after adding a new item to it
    this.CartService.addProductToCart(productId).subscribe({
      next: (res: any) => {
        console.log(res);
        this.CartService.cartLength.next(res.numOfCartItems);
        this.CartService.userCartData.next(res.data);
        console.log(this.CartService.userCartData.getValue());
        console.log(res.numOfCartItems);
      },
      error: (err) => console.log(err),
    });
  }
  removeOneFromWish(productId: any) {
    this.WishlistService.removeProductFromWishList(productId).subscribe({
      next: (res) => {
        console.log(res);
        // remove from ids array on the service
        if (this.WishlistService.wishArray.includes(productId)) {
          this.WishlistService.wishArray.splice(
            this.WishlistService.wishArray.indexOf(productId),
            1
          );
        }
        this.WishlistService.getUserWishlist().subscribe({
          next: (res) => {
            console.log(res.data);
          },
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  addProductToWish(productId: string) {
    // check if the product exist already
    if (this.WishlistService.wishArray.includes(productId)) {
      console.log('product already exist');

      console.log('now we reomve it');

      // and remove it from the server >> if succces remove from list
      this.WishlistService.removeProductFromWishList(productId).subscribe({
        next: (res) => {
          console.log(res);
          // okat its exist >> so we willremove it from the list >> after the request send succesfully

          const productIndex =
            this.WishlistService.wishArray.indexOf(productId);
          if (productIndex > -1) {
            this.WishlistService.wishArray.splice(productIndex, 1);
          }
          console.log(this.WishlistService.wishArray);
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      console.log('new');
      console.log('then we added to the list');
      console.log(this.WishlistService.wishArray);

      this.WishlistService.addProductToWishlist(productId).subscribe({
        next: (res) => {
          console.log(res);
          this.WishlistService.wishArray.push(productId);
          console.log(this.WishlistService.wishArray);
        },
        error: (err) => console.log(err),
      });
    }
  }
}
