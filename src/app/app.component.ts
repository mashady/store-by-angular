import { Component } from '@angular/core';
import { LoadingService } from './services/loading.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'store';
  loading: boolean = false;
  constructor(public LoadingService: LoadingService) {}
  ngOnInit() {
    this.LoadingService.loading.subscribe(() => {
      this.loading = this.LoadingService.loading.getValue();
    });
  }
}
