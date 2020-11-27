import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.module';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit {

  constructor(public cart: Cart) { }

  ngOnInit(): void {
  }

}
