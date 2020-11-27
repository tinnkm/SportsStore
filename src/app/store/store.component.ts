import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';
import { Cart } from '../model/cart.module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  public selectedCategory?: string;
  public pageSize = 4;
  public page = 1;

  constructor(private repository: ProductRepository,
              private cart: Cart,
              private router: Router) { }

  get products(): Product[] {
    let pageIndex = (this.page - 1) * this.pageSize
    return this.repository.getProducts(this.selectedCategory).slice(pageIndex, pageIndex + this.pageSize);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }

  changePage(newPage: number) {
    this.page = newPage;
  }

  changePageSize() {
    console.log(this.pageSize)
    this.changePage(1)
  }

  get pageCount(): number {
    return Math.ceil(this.repository.getProducts(this.selectedCategory).length /
      this.pageSize)
  }
  
  addProductToCart(product: Product){
    this.cart.addLine(product);
    this.router.navigateByUrl('/cart')
  }

  ngOnInit(): void {
  }

}
