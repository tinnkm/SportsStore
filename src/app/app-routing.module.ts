import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterGuard } from './app-routing.guard';
import { CartDetailComponent } from './store/cart-summary/cart-detail/cart-detail.component';
import { CheckoutComponent } from './store/cart-summary/checkout/checkout.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  { path: 'store', component: StoreComponent, canActivate: [RouterGuard] },
  { path: 'cart', component: CartDetailComponent, canActivate: [RouterGuard] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [RouterGuard] },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [RouterGuard] },
  { path: '**', redirectTo: '/store' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [RouterGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
