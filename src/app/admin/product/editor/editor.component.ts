import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class ProductEditorComponent implements OnInit {
  editing: boolean = false;
  product: Product = new Product();

  constructor(private repository: ProductRepository,
    private router: Router,
    activeRoute: ActivatedRoute) {
    this.editing = activeRoute.snapshot.params['mode'] === 'edit';
    console.log(activeRoute.snapshot.params['mode'])
    if (this.editing) {
      Object.assign(this.product, this.repository.getProduct(activeRoute.snapshot.params['id']))
      console.log(activeRoute.snapshot.params['id'])
      console.log(this.repository.getProduct(activeRoute.snapshot.params['id']))
    }
  }

  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl("/admin/main/products")
  }

  ngOnInit(): void {
  }

}
