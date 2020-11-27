import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { OrderRepository } from 'src/app/model/order.repository';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class OrderTableComponent implements OnInit {

  includeShipped = false;

  constructor(private repository: OrderRepository) { }

  getOrders(): Order[] {
    return this.repository.getOrders()
      .filter(c => this.includeShipped || !c.shipped)
  }

  markShipped(order: Order) {
    order.shipped = true;
    this.repository.updateOrder(order);
  }

  delete(id: number) {
    this.repository.deleteOrder(id);
  }


  ngOnInit(): void {
  }

}
