import { equalTo } from 'ng2-validation/dist/equal-to';
import { Observable } from 'rxjs/Rx';
import { order } from '../Model/order';
import { ShoppingCartService } from './shopping-cart.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

  data:order[]=[];
  orderbyid:order;
  constructor(
              private afdb:AngularFireDatabase,
              private shcart:ShoppingCartService,
              
            ) { }

  getOrderbyid(id):Observable<order>
  {

    return this.afdb.object('/orders/' + id).map(result=>this.orderbyid=result);

  }

  placeOrder(order)
  {
    let result= this.afdb.list('/orders').push(order);
    // this.shcart.clearCart();
    return result;
  }

  getAllItem()
  {
    return this.shcart.getCartId();
  }

  getOrderById(uid:any):Observable<order[]>
  {
    return this.afdb.list('/orders',{
     query:{
       orderByChild:'uid',
       equalTo:uid
     }

    }).map(data=>this.data=data);
  }


  getAllOrder():Observable<order[]>
  {
    return this.afdb.list('/orders').map(data=>this.data=data);
  }

}
