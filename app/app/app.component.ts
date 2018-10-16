import { Component, ViewEncapsulation, ViewChild, AfterViewInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ProductsService } from './services/products.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs/Rx';
import { select, NgRedux } from 'ng2-redux';

import { ROUTES_URLS } from './app.routes';
import { ROUTES } from './routes.constants';
import { UI_ACTIONS, UIActions } from '../actions/ui.actions';
import { USERS } from './permissions.constants';

import * as _ from 'lodash';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../assets/sass/main.scss'],
  templateUrl:'./app.component.html'
})

export class AppComponent implements AfterViewInit, OnDestroy{

  @select('UiState') $UiState:Observable<any>;
  private ngUnsubscribe: Subject<any> = new Subject();

  public init:boolean = false;
  public frozen:boolean = false;
  public pageName:string = '';
  public pageLogo:string = '';
  public currentRoute:string = '/';
  public isTablet:boolean = false;
  public isLarge:boolean = false;
  public isMobile:boolean = true;

  constructor(
    private activatedRoute:ActivatedRoute,
    private productsService:ProductsService,
    private router:Router,
    private uiState:UIActions) {

    // We have bound our credential requisites to this subscription
    // ------------------------------------------------------------

    this.$UiState
      .takeUntil(this.ngUnsubscribe)
      .subscribe((res)=>{

        console.log(res)
        this.isTablet = res['isTablet'];
        this.isMobile = res['isMobile'];
        this.isLarge = res['isLarge'];

        this.currentRoute = res['currentRoute'];
        this.frozen = res['frozen'];

        this.pageName = 'Sofianka';
        this.pageLogo = 'sofianka.jpg';
        this.init = true;
    })

    router.events.subscribe((path) => {
      if(path['url'] && path['url'] !== this.currentRoute){
        // If this url is different than the last one. ( not a refresh )
        // -------------------------------------------------------------
        uiState.setUrl(path['url']);
      }
    });
  }

  // Lifecycle Hooks.
  // ---------------------------
  ngAfterViewInit(){
    this.onResize({
      'target':{
        'innerWidth':(window.innerWidth.toString())
      }
    });
  }

  ngOnDestroy(){
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  // Programatic CSS changes.
  // ---------------------------
  onResize($event){
    this.uiState.trackBrowserWidth($event.target.innerWidth)
	}
}
