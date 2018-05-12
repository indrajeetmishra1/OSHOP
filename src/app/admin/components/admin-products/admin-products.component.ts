import { Product } from '../../../shared/Model/products';
import { Subscription } from 'rxjs/Subscription';
import { ProductsService } from '../../../shared/services/products.service';
import {OnDestroy, OnInit} from '@angular/core';
import {MatTable} from '@angular/material';
import { DataSource } from "@angular/cdk/collections";
import {Component, AfterViewInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSort,MatPaginator, MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {merge} from 'rxjs/observable/merge';
import {of as observableOf} from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators/catchError';
import {map} from 'rxjs/operators/map';
import {startWith} from 'rxjs/operators/startWith';
import {switchMap} from 'rxjs/operators/switchMap';



@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy,AfterViewInit{

  products : Observable<any>;
  displayedColumns = ['Title', 'Price','Edit'];
  dataSource: MatTableDataSource<Product>;

  product:Product[];
  subscrption:Subscription

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private prdservice:ProductsService) {
    // Create 100 users
    

  //  this.subscrption= prdservice.getProduct().subscribe(data=>{
      
  //     this.product=data;
  //     //console.log(this.product);
  //     this.dataSource = new MatTableDataSource(this.product);
    
  //   });

  //   console.log(this.product);

   

    // Assign the data to the data source for the table to render
    
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.subscrption= this.prdservice.getProduct().subscribe(data=>{
      
      this.product=data;
      //console.log(this.product);
      this.dataSource= new MatTableDataSource(this.product)

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnDestroy()
  {
    this.subscrption.unsubscribe();

  }
}


  





