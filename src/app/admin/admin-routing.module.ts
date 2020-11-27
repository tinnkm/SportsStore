import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';
import { OrderTableComponent } from './order/table/table.component';
import { ProductEditorComponent } from './product/editor/editor.component';
import { ProductTableComponent } from './product/table/table.component';



const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  {
    path: 'main', component: AdminComponent, canActivate: [AuthGuard], children: [
      { path: 'products/:mode/:id', component: ProductEditorComponent },
      { path: 'products/:mode', component: ProductEditorComponent },
      { path: 'products', component: ProductTableComponent },
      { path: 'orders', component: OrderTableComponent },
      { path: '**', redirectTo: 'products' }
    ]
  },
  { path: '**', redirectTo: 'auth' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
