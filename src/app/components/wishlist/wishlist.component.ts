import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent {
  wishes: any = [];
  constructor(
    public WishlistService: WishlistService,
    public CartService: CartService
  ) {}
  ngOnInit() {
    this.getWishes();
  }
  getWishes() {
    this.WishlistService.getUserWishlist().subscribe({
      next: (res) => {
        console.log(res);
        this.wishes = res.data;
      },
      error: (err) => {
        console.log(err);
      },
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
            this.wishes = res.data;
          },
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  addProductToCart(productId: string) {
    // we will create a condition here after subscribe the data on the cart after adding a new item to it
    this.CartService.addProductToCart(productId).subscribe({
      next: (res: any) => {
        console.log(res);
        this.CartService.cartLength.next(res.numOfCartItems);
        this.CartService.userCartData.next(res.data);
        this.removeOneFromWish(productId);
        console.log(this.CartService.userCartData.getValue());
        console.log(res.numOfCartItems);
      },
      error: (err) => console.log(err),
    });
  }
}
