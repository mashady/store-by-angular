import { Component } from '@angular/core';
import { BrandsService } from '../../services/brands.service';
import { Brands, BrandsData } from 'src/app/interfaces/brands';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent {
  constructor(
    public _BrandsService: BrandsService,
    private LoadingService: LoadingService
  ) {}
  brands: BrandsData[] = [];
  ngOnInit() {
    if (this._BrandsService.hasData === true) {
      console.log('data already fetched');
      console.log(this._BrandsService.data);
      this.brands = this._BrandsService.data;
    } else {
      console.log('data not fetched');
      this.LoadingService.loading.next(true);

      this._BrandsService.getAllBrands().subscribe({
        next: (res: any) => {
          console.log(res);
          this._BrandsService.setData(res.data);
          this.brands = res.data;
          this.LoadingService.loading.next(false);
        },
        error: () => {
          this.LoadingService.loading.next(false);
        },
      });
    }

    console.log('hey, king👑');
  }
}
