import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth/auth.component';
import { OrderTableComponent } from './order/table/table.component';
import { ProductEditorComponent } from './product/editor/editor.component';
import { ProductTableComponent } from './product/table/table.component';

@NgModule({
    imports: [CommonModule, FormsModule, AdminRoutingModule],
    declarations: [AdminComponent, AuthComponent, ProductTableComponent, ProductEditorComponent, OrderTableComponent]
})
export class AdminModule { }