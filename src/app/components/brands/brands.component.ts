import { Component } from '@angular/core';
import { BrandsService } from '../../services/brands.service';
import { Brands, BrandsData } from 'src/app/interfaces/brands';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent {
  constructor(public _BrandsService: BrandsService) {}
  brands: BrandsData[] = [];
  ngOnInit() {
    if (this._BrandsService.hasData === true) {
      console.log('data already fetched');
      console.log(this._BrandsService.data);
      this.brands = this._BrandsService.data;
    } else {
      console.log('data not fetched');
      this._BrandsService.getAllBrands().subscribe({
        next: (res: any) => {
          console.log(res);
          this._BrandsService.setData(res.data);
          this.brands = res.data;
        },
        error: () => {},
      });
    }

    console.log('hey, king👑');
  }
}
