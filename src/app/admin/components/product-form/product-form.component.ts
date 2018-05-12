import { CategoryService } from '../../../shared/services/category.service';
import { ProductsService } from '../../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  _productCategory$;
  prddetail={};
  id;

  constructor(
                 private catservice:CategoryService,
                 private prdservice:ProductsService,
                 private rtr: Router,
                 private activertr :ActivatedRoute
                 ) {
               this._productCategory$=catservice.getCategory();
              this.id= activertr.snapshot.paramMap.get('id');

              console.log(this.prddetail);
              console.log(this.id);

              if(this.id)
                   {
                   prdservice.getProductbyID(this.id).take(1).subscribe(item=>{
                     this.prddetail=item;
                     console.log(this.prddetail);

                    });
                  
                   }

                    
                }

  ngOnInit() {
  }

  Save(_FormsData)
                {
                if(this.id)
                  {
                    this.prdservice.update(_FormsData,this.id);
                  }
                  else
                    {
                      this.prdservice.saveProduct(_FormsData);
                    }
                  
                  this.rtr.navigate(['/admin/products'])
                
                }

    Delete()
    {
    
    if(!confirm('Are you sure you want to delete this product'))
      {
        console.log("please return");
        return;
      }
        this.prdservice.Delete(this.id);
        this.rtr.navigate(['/admin/products'])
        }
  
  

}
