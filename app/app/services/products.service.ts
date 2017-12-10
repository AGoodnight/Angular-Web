import { Injectable } from '@angular/core';
import { IProductDetail } from '../../models/app.models';
import { select, NgRedux } from 'ng2-redux';
import { Observable, BehaviorSubject } from 'rxjs';

import * as _ from 'lodash';

const INITIAL_PRODUCT:IProductDetail = {
  type:'Product Type',
  name:'Product',
  id:'00000001',
  images:['./assets/img/product_sample.jpg'],
  designer:'Rachel',
  details:'Some Stuff',
  color:[{
    name:"Black",
    id:0
  }],
  size:[{
    name:'XS',
    id:0
  },{
    name:'SM',
    id:1
  },{
    name:'MD',
    id:2
  },{
    name:'LG',
    id:3
  },{
    name:'XLG',
    id:4
  }]
};

// Place any external API calls and data manipulations used in the application here.
// Make sure returned objects are Promises or Observables, async is a good thing.

@Injectable()
export class ProductsService{

  // @select('CartState') $CartState:Observable<IProductDetail[]>;

  public $$currentProduct:BehaviorSubject<IProductDetail> = new BehaviorSubject(INITIAL_PRODUCT);
  public $$currentStyles:BehaviorSubject<string[]> = new BehaviorSubject(['all']);
  public $$currentDesigners:BehaviorSubject<string[]> = new BehaviorSubject(['all']);

  private items:IProductDetail[] = [];
  private designers:string[] = [];
  private styles:string[] = [];

  constructor(){}

  set currentProduct(id){
    let _product = INITIAL_PRODUCT;
    this.$$currentProduct.next(_product);
  }

  set currentStyles(id){
    let _styles = ['lulz'];
    this.$$currentStyles.next(_styles);
  }

  set currentDesigners(id){
    let _designers = ['lulz'];
    this.$$currentDesigners.next(_designers);
  }

  get currentProduct(){
    return this.$$currentProduct;
  }

  get currentDesigners(){
    return this.$$currentDesigners;
  }

  get currentStyles(){
    return this.$$currentStyles;
  }

  queryProducts(id:string){
    // return apicall
    return null;
  }

  queryDesigners(designer:string='all'){
    // return apicall
    return null;
  }

  queryStyles(style:string='all'){
    // return apicall
    return null;
  }

}
