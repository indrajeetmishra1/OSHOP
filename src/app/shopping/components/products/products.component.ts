import { shoppingcart } from '../../../shared/Model/shopping-cart';
import { shoppingcartitem } from '../../../shared/Model/shopping-cart-item';
import { Observable } from 'rxjs/Rx';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { Product } from '../../../shared/Model/products';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../shared/services/products.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product:Product[]=[];
  filteredproduct:Product[]=[];
  category : string;
  cartid$:Observable<shoppingcart>;
 
  constructor(
              private prdservice : ProductsService,
              private route:ActivatedRoute ,
              private shcart:ShoppingCartService
            ) { }        
              
              

  async ngOnInit() {

     this.populateproduct();
     this.getCartId();
     
  }

  private async  getCartId()
          {
            this.cartid$=await this.shcart.getCartId()
          }

  private populateproduct()
          {
                      this.prdservice.getProduct().switchMap(data=>{
                        this.product=this.filteredproduct=data;
                        return  this.route.queryParamMap;
                      }).subscribe(param=>{

                                this.category=param.get('category')
                                //console.log(this.category);
                                this.applyFilter();
                          
                                });

          }

  private applyFilter()
          {
          this.filteredproduct=(this.category)?this.product.filter(p=>p.Category===this.category):this.product;
          }

 }
