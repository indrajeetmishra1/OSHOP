import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Subscription } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { OrderService } from '../../../shared/services/order.service';
import { order } from '../../../shared/Model/order';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit {
   
  shipping={};
  userid:any;
  @Input ("cartid") cartid;
  subscription:Subscription;

  constructor(
              private ordser:OrderService,
              private route:Router,
              private auth:AuthService,
              private shcart:ShoppingCartService
            ) { }

            ngOnInit() {

              this.subscription= this.auth.user$.subscribe(i=>this.userid=i.uid)
            }


            async placeOrder()
            {
              
            console.log(this.shipping);
            let  orderItem=new order (this.shipping,this.userid,this.cartid);
            console.log(orderItem);
            let result=await this.ordser.placeOrder(orderItem);
            console.log(result.key);
            this.route.navigate(['/order-success',result.key]);
            this.shcart.clearCart();
            
            }


          }
