import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";

import { HomepageComponent } from "./homepage.component";
import { GoogleMapComponent } from "./google-map-component/google-map.component";
import { AboutComponent } from "./about-component/about.component";

const childRoutes: Routes = [
  {
    path: 'map',
    component: GoogleMapComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

const homepageRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent, children: childRoutes
  }
];

export const HomepageRouting: ModuleWithProviders = RouterModule.forChild(homepageRoutes);
