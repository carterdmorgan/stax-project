import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  // I would ordinarily store this token in a .env file that wouldn't be committed, but I figured this
  // is okay for demo purposes
  private token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYmMwMTM4NC0wZGNlLTQyOGEtYTRjMy02YmZjMDMyNzFhYzUiLCJtZXJjaGFudCI6IjJjMjA1MmFiLWQyMjQtNGFiNy1hMmYwLTQ2MDhlZTk1YzFiMyIsImdvZFVzZXIiOmZhbHNlLCJqdGkiOiJUNWZKM3hFSTFRTGFJdVcwIiwiaWF0IjoxNjEzMDUwNDAwLCJleHAiOjQ3NjY2NTA0MDAsImlzcyI6Imh0dHA6Ly9hcGkucWQuZmF0dHBheS5jb20vdGVhbS9hcGlrZXkiLCJuYmYiOjE2MTMwNTA0MDAsImFzc3VtaW5nIjpmYWxzZSwiYnJhbmQiOiJmYXR0bWVyY2hhbnQifQ.V3mS7O1afTHLspWVpLO6Xdtbcao_WdWych7-VQwHV8E'
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  })
  private url = 'https://api.qd.fattpay.com/invoice';

  constructor(
    private http: HttpClient
  ) { }

  publishInvoice(body: any): Observable<any> {
    return this.http.post(this.url, body, { headers: this.headers });
  }
}
