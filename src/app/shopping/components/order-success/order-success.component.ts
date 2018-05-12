import { order } from '../../../shared/Model/order';
import { OrderService } from '../../../shared/services/order.service';
import { ActivatedRoute } from '@angular/router';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {MatSort,MatPaginator, MatTableDataSource} from '@angular/material';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit{



  id:any='';

  constructor(private actroute:ActivatedRoute,private ordser:OrderService) { }

  ngOnInit() {
this.id= this.actroute.snapshot.paramMap.get('id');

// this.ordser.getOrder().subscribe(result=>{
//   console.log("Firebase data");
//   console.log(result);

// });
  }
 

}


