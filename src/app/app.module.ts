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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    DashboardComponent,
    AdminComponent,
    ProductComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
