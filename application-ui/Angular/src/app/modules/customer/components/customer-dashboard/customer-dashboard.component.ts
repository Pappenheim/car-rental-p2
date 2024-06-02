import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CurrencyConversionService } from '../../services/currency-conversion.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent implements OnInit {
  cars: any = [];
  convertedPrices: { [id: number]: number } = {};
  selectedCurrency = 'USD';
  isVisible: boolean = false;

  constructor(
    private customerService: CustomerService,
    private message: NzMessageService,
    private currencyConversionService: CurrencyConversionService,
  ) {
    this.getAllCars();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isVisible = true;
    }, 1000); // 1 second
  }

  getAllCars() {
    this.customerService.getAlCars().subscribe((res) => {
      res.forEach((element: any) => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImage;
        this.cars.push(element);
        this.convertedPrices[element.id] = element.price; // Initially, it's the same
      });
    });
  }

  onCurrencyChange() {
    this.cars.forEach((car: any) => {
      this.currencyConversionService.convertCurrency('USD', this.selectedCurrency, car.price).subscribe(
        (convertedAmount: number) => {
          this.convertedPrices[car.id] = convertedAmount;
        },
        (error) => {
          console.error('Conversion error:', error);
          this.message.error('Currency conversion failed.');
        }
      );
    });
  }

  convertPrice(carId: number): number {
    return this.convertedPrices[carId] || 0;
  }
}
