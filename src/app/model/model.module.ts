import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { Cart } from './cart.module';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { ProductRepository } from './product.repository';
import { RestDataSource } from './rest.datasource';
import { StaticDataSource } from './static.datasource';

// { provide:StaticDataSource, useClass: RestDataSource } 这里的意思是,当要使用StaticDataSource注入时,使用RestDataSource替代,
// RestDataSource里的方法需要和StaticDataSource里一致才会替换
@NgModule({
    providers: [ProductRepository, Cart,
        Order, OrderRepository, { provide: StaticDataSource, useClass: RestDataSource },
        RestDataSource, AuthService,{ provide: HTTP_INTERCEPTORS, useClass: RestDataSource, multi: true },]
})
export class ModelModule { }