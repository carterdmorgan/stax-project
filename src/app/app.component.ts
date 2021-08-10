import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { InvoiceService } from 'src/core/services/invoice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private defaultUrl = 'https://omni.fattmerchant.com/#/bill/';
  private snackBarDuration = 3000;

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
    private invoiceService: InvoiceService,
    private snackBar: MatSnackBar
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
        url: this.defaultUrl,
        total: this.totalFormControl.value,
        memo: this.memoFormControl.value,
        meta: {
          lineItems: [
            lineItems
          ]
        }
      };

      console.log(body);

      this.invoiceService.publishInvoice(body).subscribe(
        res => {
          this.snackBar.open('Invoice created successfully', 'Dismiss', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: this.snackBarDuration
          });
        },
        err => {
          this.snackBar.open('Error creating invoice', 'Dismiss', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: this.snackBarDuration
          });
        }
      );
    };
  }
}
