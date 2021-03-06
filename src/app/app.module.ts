import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { HomeComponent } from './views/home/home.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AdminComponent } from './views/admin/admin.component';
import { ProductComponent } from './views/product/product.component';
import { ShoppingCartComponent } from './views/shopping-cart/shopping-cart.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './views/products/products.component';
import { MyShoppingComponent } from './views/my-shopping/my-shopping.component';
import { DefaultComponent } from './views/default/default.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { AdminElecComponent } from './views/admin/admin-elec/admin-elec.component';
import { AdminUserComponent } from './views/admin/admin-user/admin-user.component';
import { AdminVentasComponent } from './views/admin/admin-ventas/admin-ventas.component';
import { AdminCategoryComponent } from './views/admin/admin-category/admin-category.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormElecComponent } from './views/admin/admin-elec/form-elec/form-elec.component';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { FormUserComponent } from './views/admin/admin-user/form-user/form-user.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmDialogComponent } from './views/confirm-dialog/confirm-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormVentasComponent } from './views/admin/admin-ventas/form-ventas/form-ventas.component';
import { FormCategoryComponent } from './views/admin/admin-category/form-category/form-category.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    DashboardComponent,
    AdminComponent,
    ProductComponent,
    ShoppingCartComponent,
    ProductsComponent,
    MyShoppingComponent,
    DefaultComponent,
    AdminElecComponent,
    AdminUserComponent,
    AdminVentasComponent,
    AdminCategoryComponent,
    FormElecComponent,
    FormUserComponent,
    ConfirmDialogComponent,
    FormVentasComponent,
    FormCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatInputModule,
    MatBadgeModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
