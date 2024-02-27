import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss'],
})
export class ShippingComponent {
  cartId: string = '';
  constructor(
    public _PaymentService: PaymentService,
    public _ActivatedRoute: ActivatedRoute
  ) {}
  shippingAddress: FormGroup = new FormGroup({
    details: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
  });
  submitShippingAdress(dataForm: FormGroup) {
    this._ActivatedRoute.params.subscribe((params) => {
      console.log(params);
      this.cartId = params['id'];
    });
    console.log(dataForm.value);
    this._PaymentService.checkOut(this.cartId, dataForm.value).subscribe({
      next: (res: any) => {
        console.log(res);
        console.log(res.session.url);
        window.location.href = res.session.url;
      },
      error: (err) => console.error(err),
    });
  }
}
