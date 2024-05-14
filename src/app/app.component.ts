import { Component } from '@angular/core';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  standalone: true,
  imports: [CurrencyConverterComponent, CommonModule]
})
export class AppComponent {
  title = 'currency-converter';
}
