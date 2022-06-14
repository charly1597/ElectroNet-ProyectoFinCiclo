import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { LoggedGuard } from './guards/logged.guard';
import { AdminCategoryComponent } from './views/admin/admin-category/admin-category.component';
import { FormCategoryComponent } from './views/admin/admin-category/form-category/form-category.component';
import { AdminElecComponent } from './views/admin/admin-elec/admin-elec.component';
import { FormElecComponent } from './views/admin/admin-elec/form-elec/form-elec.component';
import { AdminUserComponent } from './views/admin/admin-user/admin-user.component';
import { FormUserComponent } from './views/admin/admin-user/form-user/form-user.component';
import { AdminVentasComponent } from './views/admin/admin-ventas/admin-ventas.component';
import { FormVentasComponent } from './views/admin/admin-ventas/form-ventas/form-ventas.component';
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
  {path: '', component: DefaultComponent, canActivate: [LoggedGuard]},
  {path: 'login', component: LoginComponent, canActivate: [LoggedGuard]},
  {path: 'registro', component: SignUpComponent, canActivate: [LoggedGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard,AdminGuard]},
  {path: 'catalogo', component: ProductsComponent, canActivate: [AuthGuard]},
  {path: 'compras', component: MyShoppingComponent, canActivate: [AuthGuard]},
  {path: 'carrito', component: ShoppingCartComponent, canActivate: [AuthGuard]},
  {path: 'producto/:id', component: ProductComponent, canActivate: [AuthGuard]},
  {path: 'admin/electrodomesticos', component: AdminElecComponent, canActivate: [AuthGuard,AdminGuard]},
  {path: 'admin/users', component: AdminUserComponent, canActivate: [AuthGuard,AdminGuard]},
  {path: 'admin/ventas', component: AdminVentasComponent, canActivate: [AuthGuard,AdminGuard]},
  {path: 'admin/category', component: AdminCategoryComponent, canActivate: [AuthGuard,AdminGuard]},
  {path: 'admin/electrodomesticos/form/:id', component: FormElecComponent, canActivate: [AuthGuard,AdminGuard]},
  {path: 'admin/electrodomesticos/form', component: FormElecComponent, canActivate: [AuthGuard,AdminGuard]},
  {path: 'admin/users/form/:id', component: FormUserComponent, canActivate: [AuthGuard,AdminGuard]},
  {path: 'admin/users/form', component: FormUserComponent, canActivate: [AuthGuard,AdminGuard]},
  {path: 'admin/ventas/form', component: FormVentasComponent, canActivate: [AuthGuard,AdminGuard]},
  {path: 'admin/category/form', component: FormCategoryComponent, canActivate: [AuthGuard,AdminGuard]},
  {path: 'admin/category/form/:id', component: FormCategoryComponent, canActivate: [AuthGuard,AdminGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
