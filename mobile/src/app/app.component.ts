import { AvailableDrinkService } from './service/availableDrink.service';
import { OrdersService, IOrder } from './service/orders.service';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [OrdersService, AvailableDrinkService]
})
export class AppComponent {
}