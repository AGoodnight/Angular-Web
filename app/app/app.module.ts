// Gesture dependencies
import 'hammerjs';
import 'hammer-timejs';

// Scroll Bars and Browser Overrides
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

// Angular Material
import {
  MatSnackBarModule,
  MatInputModule,
  MatToolbarModule,
  MatTooltipModule,
  MatButtonModule,
  MatSelectModule,
  MatCardModule,
  MatMenuModule
} from '@angular/material';


// Angular Packages
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule,  Http } from '@angular/http';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// Translations i18n packages
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TranslatePoHttpLoader } from '@biesbjerg/ngx-translate-po-http-loader';

import { LocalStorageService, LOCAL_STORAGE_SERVICE_CONFIG } from 'angular-2-local-storage';

import { UIActions } from '../actions/ui.actions';
import { AuthActions } from '../actions/auth.actions';
import { CartActions } from '../actions/cart.actions';
//Platform and Environment providers/directives/pipes
import { ENV_PROVIDERS } from './environment';
import { routing,appRoutingProviders } from './app.routes';

// App is our top level component
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { Toaster } from './core/toaster/toaster.component';
import { HomeComponent } from './home/home.component';
import { CollectionsComponent } from './collections/collections.component';
import { ProductComponent } from './product/product.component';
import { DrawerComponent } from './core/navigation/drawer.component';
import { TopBarComponent } from './core/navigation/topbar.component';

// Application Components
import { ProductsService } from './services/products.service';

// State Managment -- Redux
import { NgReduxModule, NgRedux } from 'ng2-redux'; // Redux Bindings
import { applyMiddleware, Store, combineReducers, compose, createStore } from 'redux';
const persistState = require('redux-localstorage');
import thunk from 'redux-thunk'; // Actions can be defined as functions
import { rootReducer } from '../reducers'; // Load all reducers
import * as createLogger from 'redux-logger';

// Persist our state machine staes to local storage
// You can include the logger to see all redux
// state machine changes in the console
const logger = createLogger();
const enhancer = compose(
    applyMiddleware(
      thunk
      // ,logger
    ),
    persistState()
)

export const store: Store<any> = createStore(
  rootReducer,
  enhancer
);

// Translaton Prototypes
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
export function createTranslateLoader(http: Http) {
  return new TranslatePoHttpLoader(http, 'assets/i18n', '.po');
}

// Scrollbar Configuration
const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
 suppressScrollX: true
};

@NgModule({
  bootstrap: [ AppComponent ],

  // The component we start with
  entryComponents: [
    AppComponent
  ],

  // import Angular's modules
  imports: [
    HttpClientModule,
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory: HttpLoaderFactory, // .json files
        // useFactory: createTranslateLoader, //-- .po files
        deps:[HttpClient]
      }
    }),
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatSelectModule,
    MatMenuModule,
    HttpModule,
    JsonpModule,
    routing
  ],

  // Declare our Applications Components
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CollectionsComponent,
    ProductComponent,
    DrawerComponent,
    TopBarComponent,
    Toaster
  ],

  // expose our Services and Providers into Angular's dependency injection
  providers: [
    ENV_PROVIDERS,
    NgRedux,
    NgReduxModule,
    appRoutingProviders,
    UIActions,
    AuthActions,
    CartActions,

    // singletons
    {provide: ProductsService, useClass: ProductsService},
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ]
})

export class AppModule {
  constructor(public appRef: ApplicationRef,
              public ngRedux: NgRedux<any>) {
              ngRedux.provideStore(store);
  }

}
