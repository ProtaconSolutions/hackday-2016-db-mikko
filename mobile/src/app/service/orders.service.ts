import { IOrder } from './orders.service';
import { AngularFire } from 'angularfire2';
import { Injectable } from '@angular/core';

export interface IOrder {
    key?: string,

    // 0 ordered
    // 1 processing
    // 2 :))))))
    state?: number,
    name: string,
    recipe: number[]
}

@Injectable()
export class OrdersService {
    private orders: IOrder[] = [];

    constructor(private af: AngularFire) {
    }

    public create(order: IOrder) {
        let key = this.af.database.list("orders/").push(order).key;
        
        order.key = key;

        this.orders.push(order);

        this.af.database.object(`orders/${order.key}`).subscribe(x => {
            order.state = x.state;
        });

        return order;
    }

    private randomPour() {
        return Math.floor(Math.random() * 6); 
    }

    public surpriseMe() {
        return this.create({
            name: "SurpriseMe",
            recipe: [this.randomPour(),this.randomPour(),this.randomPour(),this.randomPour()],
            state: 0
        });
    }
}