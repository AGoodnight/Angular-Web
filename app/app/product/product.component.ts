import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { NgRedux, select } from 'ng2-redux';
import { CART_ACTIONS } from '../../reducers/actions';
import { IProductDetail } from '../../models/app.models';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector:'product-component',
  templateUrl:'./product.component.html'
})

export class ProductComponent{

  public currentProduct:IProductDetail;

  private productForm:FormGroup;
  private formIsReady:boolean = false;

  constructor(
    formBuilder:FormBuilder,
    productsService:ProductsService
  ){
    productsService.$$currentProduct.subscribe((res)=>{

      this.currentProduct = res;

      this.productForm = formBuilder.group({
        'product_size':['', Validators.required],
        'product_color':['', Validators.required]
      });

      // autoselect limited choices
      for(let prop in res){
        if(typeof res[prop] === 'object' && prop !== 'images'){
          if(res[prop].length <2 ){
            this.productForm.controls['product_'+prop].setValue(res[prop][0]['id'])
          }
        };
      }

      this.formIsReady = true;
    });

  }

}
