import { Observable } from 'rxjs/Rx';
import { shoppingcart } from '../../../shared/Model/shopping-cart';
import { OrderService } from '../../../shared/services/order.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  @Input("cartid") cartid:shoppingcart;

  constructor(private orderService:OrderService) { }

  async ngOnInit() {

   }
}
