import { Injectable } from '@angular/core';
import { Cart } from './cart.module';

@Injectable()
export class Order {
    public id?: number;
    public name?: string;
    public address?: string;
    public city?: string;
    public state?: string;
    public zip?: string;
    public country?: string;
    public shipped?: boolean = false;

    constructor(public cart: Cart) { }

    clear() {
        this.id = -1;
        this.name = this.address = this.city = '';
        this.shipped = false;
        this.cart.clear();
    }
}