import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatInputModule, MatSortModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProductCardComponent } from './component/product-card/product-card.component';
import { ProductQuantityComponent } from './component/product-quantity/product-quantity.component';
import { AuthService } from './services/auth.service';
import { Authguard } from './services/authguard.service';
import { CategoryService } from './services/category.service';
import { OrderService } from './services/order.service';
import { ProductsService } from './services/products.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
   // DataTableModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatMenuModule
     ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
  ],
  exports:[
    ProductCardComponent,
    ProductQuantityComponent,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
   // DataTableModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatMenuModule,
    FormsModule,
    CommonModule
     ],
  providers:[
    AuthService,
    Authguard,
    UserService,
    ProductsService,
    CategoryService,
    OrderService,
    ShoppingCartService,
  ]
})
export class SharedModule { }
