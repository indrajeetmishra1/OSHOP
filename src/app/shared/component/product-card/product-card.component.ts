import { shoppingcartitem } from '../../Model/shopping-cart-item';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Product } from '../../Model/products';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent{

  @Input ('products') products :Product;
  @Input ('show-action') showaction=true;
  @Input('cartid') cartid;

  constructor(private shcart:ShoppingCartService) { }

  addToCart()

  {

   this.shcart.addtocart(this.products);     

  }

  

}
