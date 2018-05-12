import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Authguard } from '../shared/services/authguard.service';
import { SharedModule } from '../shared/shared.module';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ViewOrderComponent } from './components/view-order/view-order.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([ 
      {path:'products' ,component :ProductsComponent},
      {path:'shopping-cart' , component :ShoppingCartComponent},
      {path:'check-out' ,component :CheckOutComponent,  canActivate:[Authguard]},
      {path:'My/Order' ,component :MyOrdersComponent,canActivate:[Authguard]},
      {path:'order-success/:id' ,component :OrderSuccessComponent,canActivate:[Authguard]},
      {path:'view/orders/:id' ,component :ViewOrderComponent,canActivate:[Authguard]}])
                         ],
  declarations: [
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    OrderSummaryComponent,
    ShippingFormComponent,
    ViewOrderComponent,
    ProductsComponent,
    ProductFilterComponent,
  ],
  exports:[
    ProductsComponent,
    ProductFilterComponent]
})
export class ShoppingModule { }
