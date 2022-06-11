import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCategoryComponent } from './views/admin/admin-category/admin-category.component';
import { AdminElecComponent } from './views/admin/admin-elec/admin-elec.component';
import { AdminUserComponent } from './views/admin/admin-user/admin-user.component';
import { AdminVentasComponent } from './views/admin/admin-ventas/admin-ventas.component';
import { AdminComponent } from './views/admin/admin.component';
import { DefaultComponent } from './views/default/default.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { MyShoppingComponent } from './views/my-shopping/my-shopping.component';
import { ProductComponent } from './views/product/product.component';
import { ProductsComponent } from './views/products/products.component';
import { ShoppingCartComponent } from './views/shopping-cart/shopping-cart.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';

const routes: Routes = [
  {path: '', component: DefaultComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: SignUpComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'catalogo', component: ProductsComponent},
  {path: 'compras', component: MyShoppingComponent},
  {path: 'carrito', component: ShoppingCartComponent},
  {path: 'producto/:id', component: ProductComponent},
  {path: 'admin/electrodomesticos', component: AdminElecComponent},
  {path: 'admin/users', component: AdminUserComponent},
  {path: 'admin/ventas', component: AdminVentasComponent},
  {path: 'admin/category', component: AdminCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
