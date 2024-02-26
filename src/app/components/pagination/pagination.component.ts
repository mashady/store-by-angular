import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() totalItems: any;
  @Input() currentPage: any;
  @Input() itemsPerPage: any;
  @Output() onClick: EventEmitter<number> = new EventEmitter();
  totalPages = 0;
  pages: number[] = [1];

  constructor() {}

  ngOnInit() {
    if (this.totalItems) {
      // get the total pages
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      // array of pages as a numbers
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);

      console.log(this.totalPages);
      console.log(this.pages);
      console.log(this.totalItems);
    } else {
    }
  }

  pageClick(page: number) {
    this.onClick.emit(page);
  }
}
