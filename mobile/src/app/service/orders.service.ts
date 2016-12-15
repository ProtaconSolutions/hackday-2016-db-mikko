import { IOrder } from './orders.service';
import { AngularFire } from 'angularfire2';
import { Injectable } from '@angular/core';

export interface IOrder {
    key?: string,
    state?: string,
    name: string,
    recipe: number[]
}

@Injectable()
export class OrdersService {
    private orders: IOrder[] = [];

    constructor(private af: AngularFire) {
    }

    public create(order: IOrder) {
        let newOrder = this.af.database.list("orders/").push(order);
        order.key = newOrder.key;
        this.orders.push(order);
        
        this.af.database.object(`orders/${order.key}`).subscribe(x => {
            order.state = x.state;
        })

        return order;
    }

    public surpriseMe() {
        return this.create({
            name: "SurpriseMe",
            recipe: [1,2,3,4,0,0],
        });
    }
}