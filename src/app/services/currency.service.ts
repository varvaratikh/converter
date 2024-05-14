import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  constructor(private http: HttpClient) {}

  convertCurrency(amount: number): Observable<any> {
    const apiUrl = `https://www.cbr-xml-daily.ru/daily.xml`; // Пример API
    return this.http.get<any>(apiUrl);
  }
}
