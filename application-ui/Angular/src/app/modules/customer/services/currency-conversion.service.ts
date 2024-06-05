import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyConverterClient } from './Currency_converterServiceClientPb';
import { ConvertCurrencyRequest, ConvertCurrencyResponse } from './currency_converter_pb';
import { environment } from 'src/environments/environment';

const CURRENCY_CONVERTER_URL = environment.CURRENCY_CONVERTER_URL;

@Injectable({
  providedIn: 'root'
})
export class CurrencyConversionService {
  private client: CurrencyConverterClient;

  constructor() {
    this.client = new CurrencyConverterClient(CURRENCY_CONVERTER_URL);
  }

  convertCurrency(fromCurrency: string, toCurrency: string, amount: number): Observable<number> {
    const request = new ConvertCurrencyRequest();
    request.setFromCurrency(fromCurrency);
    request.setToCurrency(toCurrency);
    request.setAmount(amount);

    return new Observable(observer => {
      this.client.convertCurrency(request, {}, (err, response: ConvertCurrencyResponse) => {
        if (err) {
          observer.error(err);
        } else {
          const message = response.getMessage();
          const convertedAmount = this.parseConvertedAmount(message);
          observer.next(convertedAmount);
          observer.complete();
        }
      });
    });
  }

  private parseConvertedAmount(message: string): number {
    const match = message.match(/Converted .* to ([0-9]+\.?[0-9]*)/);
    return match ? parseFloat(match[1]) : 0;
  }
}
