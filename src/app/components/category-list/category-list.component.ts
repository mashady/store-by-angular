import { Component } from '@angular/core';
import { CategoryList } from '../../interfaces/category-list';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent {
  CategoryList: CategoryList[] = [
    {
      name: "Men's Fashion",
      categoryImage: '../../../assets/categories/men2.jpg',
      categoryLink: "men's-fashion",
    },
    {
      name: "Women's Fashion",
      categoryImage: '../../../assets/categories/categories.jpg',
      categoryLink: "women's-fashion",
    },
    {
      name: 'Baby & Toys',
      categoryImage: '../../../assets/categories/baby.jpg',
      categoryLink: 'baby-and-toys',
    },
    {
      name: 'Beauty & Health',
      categoryImage: '../../../assets/categories/beauty.jpg',
      categoryLink: 'beauty-and-health',
    },
    {
      name: 'Music',
      categoryImage: '../../../assets/categories/music.jpg',
      categoryLink: 'music',
    },
    {
      name: 'Books',
      categoryImage: '../../../assets/categories/books2.jpg',
      categoryLink: 'books',
    },
  ];
}
