import { ROUTES } from './routes.constants';

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductComponent } from './product/product.component';

export const ROUTES_URLS: Routes = [
  { path:ROUTES.HOME, component:HomeComponent },
  { path:ROUTES.GALLERY, component:GalleryComponent },
  { path:ROUTES.PRODUCT, component:ProductComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES_URLS);
