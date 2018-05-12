import { shoppingcart } from '../../../shared/Model/shopping-cart';
import { Observable } from 'rxjs/Rx';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
//import { shoppingcart } from '../../../shared/Model/shopping-cart';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

 cart$:Observable<shoppingcart>

  constructor(private shcart :ShoppingCartService) { }

async ngOnInit() {

this.cart$=await this.shcart.getCartId()

      }

clearCart()
{
  this.shcart.clearCart();
}

}
