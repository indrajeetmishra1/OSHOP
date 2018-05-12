import { ProductsComponent } from './shopping/components/products/products.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CustomFormsModule } from 'ng2-validation';

import { environment } from '../environments/environment';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { CoreModule } from './core/core.module';
import { AdminAuthGuard } from './shared/services/admin-auth-guard.service';
import { SharedModule } from './shared/shared.module';
import { ShoppingModule } from './shopping/shopping.module';
import { FooterComponent } from './core/components/footer/footer.component';


//import {DataTableModule} from 'angular-4-data-table';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    AdminModule,
    CoreModule,
    ShoppingModule,
    CustomFormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
             
                         {    path:'' ,component :ProductsComponent},
                         {    path:'login' ,component :LoginComponent},
                                               
                        
    ])
  ],
  providers: [
              AdminAuthGuard
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
