import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';
import { CounterDirective } from './counter.directive';
import { StoreComponent } from './store.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-summary/cart-detail/cart-detail.component';
import { CheckoutComponent } from './cart-summary/checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule,RouterModule,HttpClientModule],
    declarations: [StoreComponent, CounterDirective, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
    exports: [StoreComponent]
})
export class StoreModule { }