import { shoppingcartitem } from '../Model/shopping-cart-item';
import { shoppingcart } from '../Model/shopping-cart';
import { FirebaseObjectObservable } from 'angularfire2/database/firebase_object_observable';
import { number } from 'ng2-validation/dist/number';
import { Product } from '../Model/products';
//import { async } from 'rxjs/scheduler/async';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ShoppingCartService {

  constructor(private dbf:AngularFireDatabase) { }

  createCart()
  {

    return this.dbf.list('/shopping-carts').push(
      {
        dateCreated: new Date().getTime()
      }
    )

  }

 async clearCart()
  {
    let cartid=await this.CreateOrGetCart();
    this.dbf.object('/shopping-carts/'+cartid).remove();
  }

async getCartId():Promise<Observable<shoppingcart>>
                              {
                                let cartkey=await this.CreateOrGetCart();
                                return  this.dbf.object('/shopping-carts/'+cartkey).map(x=>new shoppingcart(x.items));
                              }

  private getItem(id : string , productkey :string)
  {
   return  this.dbf.object('/shopping-carts/'+ id + '/items/'+ productkey);
  }

  private async CreateOrGetCart(): Promise<string>
                            {
                              let cartId=localStorage.getItem('cartId');

                              if (cartId) return cartId;
                              let result= await this.createCart();
                              localStorage.setItem('cartId',result.key);
                               return result.key;
 
                              
                                    // if(!cartId)
                                    // {
                                    //   this.createCart().then(result=>
                                    //   {
                                    //     localStorage.setItem('cartId',result.key);
                                    //     //Add product to cart
                                    //   });  
                                  
                                    // }
                                    // else{
                                    //   //Add product to cart
                                    // }
                            }

                          async  addtocart(product:Product)
                            {
                              this.updateItem(product,1);

                            }

                           async  removefromcart(product:Product)
                           {
                            this.updateItem(product,-1);
                           }

                           private  async  updateItem(product:Product,change:number)

                           {

                            let id=await this.CreateOrGetCart();
                            let item$= this.getItem(id,product.$key);
                            console.log(item$);
                            item$.take(1).subscribe(item=>
                                {
                              let quantity=(item.quantity||0)+change;
                              if(quantity===0) item$.remove();
                              else item$.update({
                                title:product.title,
                                ImageUrl:product.ImageUrl,
                                Price:product.Price,
                                quantity :quantity
                              // if(item.$exists()) item$.update({quantity :item.quantity+1 });
                              // else item$.set({product:product,quantity:1});
                            });
                          })
                        }
                      }

                           
  
  
