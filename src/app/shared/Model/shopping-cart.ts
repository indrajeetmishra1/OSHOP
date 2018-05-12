import { Product } from './products';
import { shoppingcartitem } from './shopping-cart-item';
export class shoppingcart{

    items:shoppingcartitem[]=[];
 constructor(public itemsmap:{[productid:string] :shoppingcartitem}){
this.itemsmap=itemsmap || {};
    for(let productid in itemsmap)
        {
            let item=itemsmap[productid];
            // let x=new shoppingcartitem({
            //     // title:item.title,
            //     // ImageUrl:item.ImageUrl,
            //     // Price:item.Price,
            //     // quantity:item.quantity,
            //     // $key:productid
            //     ...item,
            //     $key:productid
            // });
            this.items.push(new shoppingcartitem({...item,$key:productid}));
            // let x=new shoppingcartitem();
            // Object.assign(x,item);
            // x.$key=productid;
            //  this.items.push(x);
        }
 }

//  get productids()
//  {
//      //in order to return object in array format
//      return Object.keys(this.items);
//  }

getthecount(product:Product)
{
  //console.log(this.cartid);
   let item=this.itemsmap[product.$key];
  // console.log(item);
  return item?item.quantity:0;

}

get gettotalcount()
{
    let count=0;
    for(let productid in this.itemsmap)
    count+=this.itemsmap[productid].quantity;
 return count;
}

get totalprice()
{
    let sum=0;
    for(let productid in this.items)
        {

            sum+=this.items[productid].totalprice;
        }
        return sum;

}

}