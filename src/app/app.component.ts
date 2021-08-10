import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InvoiceService } from 'src/core/services/invoice.service';

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

  constructor(
    private invoiceService: InvoiceService
  ) {}

  submit() {
    if (this.invoiceForm.valid) {
      const details = this.detailsFormControl.value;
      const quantity = this.quantityFormControl.value;
      const price = this.priceFormControl.value;

      let lineItems =  {};
      if (details) lineItems['details'] = details;
      if (quantity) lineItems['quantity'] = details;
      if (price) lineItems['price'] = details;

      let body = {
        total: this.totalFormControl.value,
        memo: this.memoFormControl.value,
        meta: {
          lineItems: [
            lineItems
          ]
        }
      };

      this.invoiceService.publishInvoice(body).subscribe(
        res => {
          console.log('success', res)
        },
        err => {
          console.log('err', err)
        }
      );
    };
  }
}
