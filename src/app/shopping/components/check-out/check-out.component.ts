import { Observable} from 'rxjs/Rx';
import { shoppingcart } from '../../../shared/Model/shopping-cart';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

 
  cartid$:Observable<shoppingcart>;

  constructor(private shcart:ShoppingCartService) { }
  async ngOnInit() {
    this.cartid$=await this.shcart.getCartId();
    
  }

}
