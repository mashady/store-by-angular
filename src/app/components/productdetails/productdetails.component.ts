import { Component } from '@angular/core';
import { ProductList } from '../../interfaces/product-list';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { LoadingService } from '../../services/loading.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss'],
})
export class ProductdetailsComponent {
  productItem: any;
  productId: string = '';
  constructor(
    public ProductsService: ProductsService,
    private _ActivatedRoute: ActivatedRoute,
    public CartService: CartService,
    public LoadingService: LoadingService,
    public WishlistService: WishlistService
  ) {}
  ngOnInit() {
    this._ActivatedRoute.params.subscribe((params) => {
      this.productId = params['id'];
    });
    this.LoadingService.loading.next(true);

    this.ProductsService.getProductById(this.productId).subscribe({
      next: (product) => {
        console.log(product.data);

        this.productItem = product.data;
        this.LoadingService.loading.next(false);
      },
      error: (err) => {
        console.log(err);
        this.LoadingService.loading.next(false);
      },
    });
  }
  addProductToCart(productId: string) {
    this.CartService.addProductToCart(productId).subscribe({
      next: (res: any) => {
        console.log(res);
        this.CartService.cartLength.next(res.numOfCartItems);
        this.CartService.cartInit();
      },
      error: (err) => console.log(err),
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
