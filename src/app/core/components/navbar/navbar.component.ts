import { shoppingcart } from '../../../shared/Model/shopping-cart';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { UserService } from '../../../shared/services/user.service';
import { AppUser } from '../../../shared/Model/AppUser';
import { AuthService } from '../../../shared/services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: AppUser
  shoppingCartItemCount:number
  cart$:Observable<shoppingcart>

  constructor(private afauth : AuthService,private shcartservice :ShoppingCartService) {

    

   }

  async ngOnInit() {
   this.afauth.AppUser$.subscribe(user=>this.user=user);

   this.cart$=await this.shcartservice.getCartId();

   }

  logout(){

    this.afauth.logout();


  }

}
