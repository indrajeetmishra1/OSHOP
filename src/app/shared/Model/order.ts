import { shoppingcart } from './shopping-cart';
export class order{

    datePlaced:number;
    items:any[];

    constructor(public shipping:any,public userid:string,cartid:shoppingcart)
    {
     this.datePlaced= new Date().getTime();
     this.items=cartid.items.map(i=>{
        return{
               product:{
                 title:i.title,
                 imageUrl:i.ImageUrl,
                 price:i.Price
               },
               quantity:i.quantity,
               totalprice:i.totalprice
        }
 
 
      })
    


    }



}