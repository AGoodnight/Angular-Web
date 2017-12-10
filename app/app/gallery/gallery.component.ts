import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgRedux, select } from 'ng2-redux';
import { Observable, Subject } from 'rxjs';
import { UI_ACTIONS, UIActions } from '../../actions/ui.actions';
import { ROUTES } from '../routes.constants';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ESimpleState } from '../../models/state.models';

@Component({
  selector:'gallery-component',
  templateUrl:'gallery.component.html'
})

export class GalleryComponent implements OnInit, OnDestroy{

  @select('UiState') $UiState:Observable<any>;
  private ngUnsubscribe: Subject<any> = new Subject();

  private title:string = 'Gallery';
  private content:string = 'Content will go here';
  private products:any = [1,1,1,1];
  private ROUTES:any = ROUTES;
  private simple:ESimpleState;
  private isTablet:boolean = true;

  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private ngRedux:NgRedux<any>
  ){
    this.$UiState
      .takeUntil(this.ngUnsubscribe)
      .subscribe((res)=>{
        this.isTablet = res['isTablet'];
    })
  }

  // Lifecycle Hooks.
  // ---------------------------
  ngOnInit(){
    console.log('Galery Init')

    this.ngRedux.dispatch({
      type:UI_ACTIONS.CUE_TOAST,
      payload:{
        msg:'New Items in stock!'
      }
    })
  }

  ngOnDestroy(){
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
