import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomFormsModule } from 'ng2-validation';

import { AdminAuthGuard } from '../shared/services/admin-auth-guard.service';
import { Authguard } from '../shared/services/authguard.service';
import { SharedModule } from '../shared/shared.module';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

@NgModule({
  imports: [
    CustomFormsModule,
    SharedModule,
    RouterModule.forChild([ { path:'admin/products/new' ,
                              component :ProductFormComponent,
                              canActivate:[Authguard,AdminAuthGuard]
                            },

                                {    path:'admin/products/:id' ,
                                component :ProductFormComponent,
                              canActivate:[Authguard,AdminAuthGuard]
                                },
                                                        
                                {   path:'admin/products' ,
                                component :AdminProductsComponent,
                              canActivate:[Authguard,AdminAuthGuard]
                              },
                                {    path:'admin/orders' ,
                                    component :AdminOrdersComponent,
                                  canActivate:[Authguard,AdminAuthGuard]
                                },])
  ],
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
    
  ],
  providers:
  [

  ]
})
export class AdminModule { }
