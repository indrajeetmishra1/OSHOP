import { Product } from '../Model/products';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

import {
  AngularFireDatabase,
  FirebaseObjectObservable,
  FirebaseListObservable
} from 'angularfire2/database';


@Injectable()
export class ProductsService {

  data1:Product[];

  constructor(private afdb:AngularFireDatabase) {
   

   }
  //  getCategory()
  //  {
  // //return this.afdb.list('/categories');

  // return this.afdb.list('/categories');

  // return this.afdb.list('/categories').snapshotChanges().map(actions=>{
    
  //                 return actions.map(action=>({key:action.key, ...action.payload.val()}));
  //                }).subscribe(item=>{
  //                   //item.map(items=>console.log());
  //                  console.log(item);

  //                })
  //  }



saveProduct(formsdata)
{

  this.afdb.list('/product').push(formsdata);

}
getProduct (): Observable<Product[]>
{

 return this.afdb.list('/product').map(data=>{ return this.data1= data});
 
}

getProductbyID(id)
{

  return this.afdb.object('/product/' + id)

}
update(product,productid)
{

  return this.afdb.object('/product/'+productid).update(product);
  
}

Delete(id)
{
  return this.afdb.object('/product/'+id).remove();
}


}
