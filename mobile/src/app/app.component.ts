import { OrdersService, IOrder } from './service/orders.service';
import { Component, Inject } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [OrdersService]
})
export class AppComponent {
  public pours: IOrder[] = [];
  public messaging: any;

  constructor(private orders: OrdersService) {
    this.messaging = firebase.messaging()
  }

  public surpriseMe() {
    this.pours.push(this.orders.surpriseMe());
  }
}