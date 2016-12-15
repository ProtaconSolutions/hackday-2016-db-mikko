import { AvailableDrinkService } from './../service/availableDrink.service';
import { IOrder, OrdersService } from './../service/orders.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})

export class NewOrderComponent {
  constructor(public drinkService: AvailableDrinkService) {
  }
}
