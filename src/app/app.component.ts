import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stax-project';
  details = "details";
  invoiceForm = new FormGroup({
    memo: new FormControl('', [
      Validators.required
    ]),
    total: new FormControl('', [
      Validators.required
    ]),
    details: new FormControl(''),
    quantity: new FormControl(''),
    price: new FormControl('')
  });

  get memoFormControl() {
    return this.invoiceForm.get('memo');
  }

  get totalFormControl() {
    return this.invoiceForm.get('total');
  }

  get detailsFormControl() {
    return this.invoiceForm.get('details');
  }

  get quantityFormControl() {
    return this.invoiceForm.get('quantity');
  }

  get priceFormControl() {
    return this.invoiceForm.get('price');
  }

  test() {
    this.invoiceForm.get('details').setValue('Carter is testing');
  }

  submit() {
    if (this.invoiceForm.valid) {
      console.log('valid')
    } else {
      console.log('invalid')
    }
  }
}
