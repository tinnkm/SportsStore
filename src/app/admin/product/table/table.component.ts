import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class ProductTableComponent implements OnInit {

  constructor(private repository: ProductRepository) { }

  getProducts(): Product[]{
    return this.repository.getProducts();
  }

  deleteProduct(id: number){
    this.repository.deleteProduct(id);
  }

  ngOnInit(): void {
  }

}
