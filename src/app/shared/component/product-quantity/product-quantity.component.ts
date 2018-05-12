import { shoppingcartitem } from '../../Model/shopping-cart-item';
import { shoppingcart } from '../../Model/shopping-cart';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Product } from '../../Model/products';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent{
  @Input ('products') products :Product;
  @Input('cartid') cartid;
  //@Input('showaction')showAction=true;

  constructor(private shcart:ShoppingCartService) { 

    console.log(this.products);
   
  }

  addToCart()
  
    {

      console.log("add to cart button clicked");
      console.log(this.products);
      //console.log(this.cartid);
  
     this.shcart.addtocart(this.products);     
  
    }

  removeFromCart()
  {
    console.log("remove from cart button clicked");
    this.shcart.removefromcart(this.products);
  }

  

  

}
