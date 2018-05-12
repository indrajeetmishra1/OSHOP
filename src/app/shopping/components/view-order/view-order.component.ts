import { order } from '../../../shared/Model/order';
import { OrderService } from '../../../shared/services/order.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  id:any;

  order:any[];

  constructor(private actroute:ActivatedRoute,private ordsr:OrderService) { }

  ngOnInit() {

    this.id=this.actroute.snapshot.paramMap.get('id');

    this.ordsr.getOrderbyid(this.id).subscribe(result=>{
      console.log(result.items);
      this.order=result.items

    })


  }

}
