import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss'],
})
export class ForgetpasswordComponent {
  forgetPass: FormGroup = new FormGroup({
    email: new FormControl(),
  });
  constructor(private AuthService: AuthService, public _Router: Router) {}
  submitForgetPass(dataForm: FormGroup) {
    this.AuthService.forget(dataForm.value).subscribe({
      next: (res) => {
        this._Router.navigate(['/home']);
      },
    });
  }
}
