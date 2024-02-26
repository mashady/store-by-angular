import { Component } from '@angular/core';
import { CategoryList } from '../../interfaces/category-list';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  itemsPerPage = 3;
  currentPage = 1;
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
  get PaginatedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    return this.CategoryList.slice(start, end);
  }
  changePage(n: number) {
    console.log(n);
    this.currentPage = n;
  }
}
