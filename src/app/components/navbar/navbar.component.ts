import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  sidebarOpened: boolean = false;
  searchbarIsOpen: boolean = false;
  cartIsOpen: boolean = false;
  toggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
    console.log(this.sidebarOpened);
  }
  toggleSearchClick() {
    this.searchbarIsOpen = !this.searchbarIsOpen;
    console.log('clicked');
  }
  toggleCart() {
    this.cartIsOpen = !this.cartIsOpen;
  }
}
