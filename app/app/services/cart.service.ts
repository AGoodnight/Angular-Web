import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { select, NgRedux } from 'ng2-redux';
import { Observable, Subject } from 'rxjs';

// In some cases the 'any' type can be swapped for something more specialized,
// this improves testing.
import { IUserDetails, IProductDetail } from '../../models/app.models';

// Place any external API calls and data manipulations used in the application here.
// Services are also good for singletons that are shared throughout the app
// Make sure returned objects are Promises or Observables, async is a good thing.

@Injectable()
export class CartService implements OnInit, OnDestroy{

  @select('CartState') $CartState:Observable<IProductDetail[]>;
  @select('AuthState') $AuthState:Observable<IUserDetails>;
  private ngUnsubscribe: Subject<any> = new Subject();

  private token:string = null;
  private payloads:IProductDetail[];
  private user:IUserDetails;

  constructor(){

    // Cart Items
    this.$CartState.subscribe((res)=>{
      // console.log('onSubscribe: "Sorting Cart Items"');
      if(res){
        // this.payloads = res.sort( byAlphabetical() )
        this.payloads = res['items'];
      }
    });

    // Customer
    this.$AuthState.subscribe((res)=>{
      if(res){
        this.user = res['user'];
      }
    });

  }
  
  // Lifecycle Hooks.
  // ---------------------------
  ngOnInit(){
    
  }
  
  ngOnDestroy(){
    this.ngUnsubscribe.next(); 
    this.ngUnsubscribe.complete();
  }

  usePayPal(){
    // connect to paypal service
    // use user information for validation
  }

  requestPurchaseOfItems(){
    this.usePayPal();
  }

}

function byAlphabetical(){
  console.log('byAlphabetical - arguments: ',arguments.length);
  return arguments;
}
