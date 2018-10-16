import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgRedux, select } from 'ng2-redux';
import { Observable, Subject } from 'rxjs';
import { UI_ACTIONS, UIActions } from '../../actions/ui.actions';
import { ROUTES } from '../routes.constants';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ESimpleState } from '../../models/state.models';

@Component({
  selector:'about-component',
  templateUrl:'about.component.html'
})

export class AboutComponent implements OnInit, OnDestroy{

  @select('UiState') $UiState:Observable<any>;
  private ngUnsubscribe: Subject<any> = new Subject();

  private title:string = 'Our Story';
  private content:string = 'Sofianka unapologetically beautiful and sexy';
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
    console.log('About Init')

    this.ngRedux.dispatch({
      type:UI_ACTIONS.CUE_TOAST,
      payload:{
        msg:'Our Story'
      }
    })
  }

  ngOnDestroy(){
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
