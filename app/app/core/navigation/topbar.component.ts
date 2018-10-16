import { Component, OnInit, Input, EventEmitter, Inject } from  '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ROUTES } from '../../routes.constants';

import * as _ from 'lodash';

@Component({
  selector:'topbar',
  templateUrl:'./topbar.component.html'
})

export class TopBarComponent{

  @Input()
  closed:boolean = false;

  private navigationButtons:any;

  constructor(
    private router:Router,
    ){
      this.navigationButtons = [
        {
          name:"Home",
          route:ROUTES.HOME
        },
        {
          name:"Collections",
          tooltip:"New Items!",
          route:ROUTES.COLLECTIONS}
      ];
  }



}
