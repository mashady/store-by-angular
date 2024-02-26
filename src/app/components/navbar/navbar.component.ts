import { Component, HostListener } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { __values } from 'tslib';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  sidebarOpened: boolean = false;
  searchbarIsOpen: boolean = false;
  cartIsOpen: boolean = false;
  authMenuIsOpen: boolean = false;
  isLoggin: boolean = false;
  numberOfCartItems: number = 0;
  cartProducts: any[] = [];
  constructor(
    private _AuthService: AuthService,
    private CartService: CartService
  ) {}
  ngOnInit() {
    this.CartService.userCartData.subscribe({
      next: (res: any) => {
        console.log(res?.products);
        this.cartProducts = res?.products;
      },
    });
    this._AuthService.userData.subscribe({
      next: () => {
        if (this._AuthService.userData.getValue() !== null) {
          this.isLoggin = true;
          this.CartService.cartLength.subscribe({
            next: (res) => {
              this.numberOfCartItems = res;
            },
          });
        } else {
          this.isLoggin = false;
        }
      },
    });
  }
  toggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
    if (this.sidebarOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    console.log(this.sidebarOpened);
  }
  toggleSearchClick() {
    this.searchbarIsOpen = !this.searchbarIsOpen;

    console.log('clicked');
  }
  toggleCart() {
    this.cartIsOpen = !this.cartIsOpen;
    if (this.cartIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
  toggleMenu() {
    this.authMenuIsOpen = !this.authMenuIsOpen;
  }
  //@HostListener('document:click', ['$event'])
  clickOutSide() {
    console.log();
    this.authMenuIsOpen = false;
    console.log('dom clicked');
  }
  removeProductFromCart(productId: string) {
    this.CartService.removeProductById(productId).subscribe({
      next: (res: any) => {
        console.log(res);
        this.CartService.cartLength.next(res.numOfCartItems);
        this.CartService.userCartData.next(res.data);
      },
    });
  }
  updateCartCount(productId: string, count: number) {
    this.CartService.updateCartCount(productId, count).subscribe({
      next: (res: any) => {
        console.log(res);
        //this.CartService.cartLength.next(res.numOfCartItems);
        this.CartService.userCartData.next(res.data);
      },
    });
  }
  logOut() {
    this._AuthService.logout();
  }
}
