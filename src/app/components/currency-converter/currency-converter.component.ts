import { Component } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.sass'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class CurrencyConverterComponent {
  amount: number = 0;
  convertedAmounts: any;

  constructor(private currencyService: CurrencyService) {}

  convert() {
    this.currencyService.convertCurrency(this.amount).subscribe((data: any) => {
      this.convertedAmounts = data;
    });
  }
}
