import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stax-project';
  details = "details";
  invoiceForm = new FormGroup({
    memo: new FormControl(''),
    details: new FormControl(''),
    quantity: new FormControl(''),
    price: new FormControl(''),
    total: new FormControl(''),
  });

  test() {
    this.invoiceForm.get('details').setValue('Carter is testing');
  }
}
