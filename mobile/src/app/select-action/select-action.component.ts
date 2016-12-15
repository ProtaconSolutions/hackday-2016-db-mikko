import { IDrinkRecipe, AvailableDrinkService } from './../service/availableDrink.service';
import { IOrder, OrdersService } from './../service/orders.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-action',
  templateUrl: './select-action.component.html',
  styleUrls: ['./select-action.component.scss']
})
export class SelectActionComponent {
  public pours: IOrder[] = [];
  public messaging: any;

  constructor(public drinkService: AvailableDrinkService, private orders: OrdersService) {
  }

  public surpriseMe() {
    this.pours.push(this.orders.surpriseMe());
  }

  public order(order: IDrinkRecipe) {
    this.pours.push(this.orders.create(order.recipe));
  }
}
