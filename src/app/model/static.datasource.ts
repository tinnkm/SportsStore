import { Injectable } from '@angular/core';
import { from, Observable,of  } from 'rxjs';
import { Order } from './order.model';
import { Product } from './product.model';


@Injectable()
export class StaticDataSource{
    private products: Product[] = [
        new Product(1,"Product 1", "category 1", "Product 1 (Category 1)", 100),
        new Product(2,"Product 2", "category 1", "Product 2 (Category 1)", 100),
        new Product(3,"Product 3", "category 1", "Product 3 (Category 1)", 100),
        new Product(4,"Product 4", "category 1", "Product 4 (Category 1)", 100),
        new Product(5,"Product 5", "category 2", "Product 5 (Category 2)", 100),
        new Product(6,"Product 6", "category 2", "Product 6 (Category 2)", 100),
    ]

    getProducts(): Observable<Product[]>{
        return of(this.products)
    }

    saveOrder(order: Order): Observable<Order>{
        return of(order)
    }
}