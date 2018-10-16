import { Component, Input, ChangeDetectionStrategy } from  '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ROUTES } from '../../routes.constants';

import * as _ from 'lodash';

@Component({
  selector:'drawer',
  templateUrl:'./drawer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DrawerComponent{

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
          tooltip:"Collections coming soon",
          route:ROUTES.COLLECTIONS
        },
        {
          name:"Our Story",
          tooltip:"Our Story",
          route:ROUTES.ABOUT
        }
      ];
  }



}
