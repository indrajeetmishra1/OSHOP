import { AuthService } from '../../../shared/services/auth.service';
import { Component} from '@angular/core';
import { order } from '../../../shared/Model/order';
import { OrderService } from '../../../shared/services/order.service';
import { ActivatedRoute } from '@angular/router';
import { AfterViewInit, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {MatSort,MatPaginator, MatTableDataSource} from '@angular/material';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})

  export class MyOrdersComponent implements OnInit,OnDestroy,AfterViewInit {
    
    
    
      id:any='';
      userid:any;
    
      displayedColumns = ['OrderId','View'];
      dataSource: MatTableDataSource<order>;
    
      order:order[];
      subscrption:Subscription
    
      @ViewChild(MatPaginator) paginator: MatPaginator;
      @ViewChild(MatSort) sort: MatSort;
    
      constructor(private actroute:ActivatedRoute,private ordser:OrderService,private aufth:AuthService) { }
    
      ngOnInit() {
        this.aufth.user$.map(user=>{
          
          this.userid=user.uid;
          
             })
          
      }
    
      ngAfterViewInit() {
        this.subscrption= this.ordser.getOrderById(this.userid).subscribe(data=>{
          
          this.order=data;
          //console.log(this.product);
          this.dataSource= new MatTableDataSource(this.order)
    
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        
        });
      }
    
      // applyFilter(filterValue: string) {
      //   filterValue = filterValue.trim(); // Remove whitespace
      //   filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
      //   this.dataSource.filter = filterValue;
      // }
    
      ngOnDestroy()
      {
        this.subscrption.unsubscribe();
    
      }
    }
