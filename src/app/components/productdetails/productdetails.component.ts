import { Component } from '@angular/core';
import { ProductList } from '../../interfaces/product-list';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss'],
})
export class ProductdetailsComponent {
  ProductList: ProductList[] = [
    {
      name: 'prod one ',
      price: 1,
      productImage:
        'https://www.maddstore.com/cdn/shop/files/kawkab2.jpg?v=1699279034&width=1100',
    },
    {
      name: 'prod two ',
      price: 2,
      productImage:
        'https://www.maddstore.com/cdn/shop/files/kawkab2.jpg?v=1699279034&width=1100',
    },
    {
      name: 'prod three ',
      price: 3,
      productImage:
        'https://www.maddstore.com/cdn/shop/files/kawkab2.jpg?v=1699279034&width=1100',
    },
    {
      name: 'prod four ',
      price: 4,
      productImage:
        'https://www.maddstore.com/cdn/shop/files/kawkab2.jpg?v=1699279034&width=1100',
    },
    {
      name: 'prod five ',
      price: 5,
      productImage:
        'https://www.maddstore.com/cdn/shop/files/kawkab2.jpg?v=1699279034&width=1100',
    },
    {
      name: 'prod sex ',
      price: 6,
      productImage:
        'https://www.maddstore.com/cdn/shop/files/kawkab2.jpg?v=1699279034&width=1100',
    },
    {
      name: 'prod seven ',
      price: 7,
      productImage:
        'https://www.maddstore.com/cdn/shop/files/kawkab2.jpg?v=1699279034&width=1100',
    },
    {
      name: 'prod eight ',
      price: 8,
      productImage:
        'https://www.maddstore.com/cdn/shop/files/kawkab2.jpg?v=1699279034&width=1100',
    },
  ];

  constructor() {}
}
