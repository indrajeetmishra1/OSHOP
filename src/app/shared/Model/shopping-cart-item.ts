import { Product } from './products';
export class shoppingcartitem{
    $key:string;
    title:string;
    ImageUrl :string;
    Price :number;
    quantity:number;

    
   
  constructor(init?:Partial<shoppingcartitem>){

    Object.assign(this,init);
  }



    get totalprice()
    {
        return this.Price*this.quantity;
    }
    
    }

