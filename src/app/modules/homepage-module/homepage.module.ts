import { NgModule, ApplicationRef } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { HomepageComponent } from "./homepage.component";
import { HeaderComponent } from "./header-component/header.component";
import { SidebarComponent } from "./sidebar-component/sidebar-component";
import { NavigationComponent } from "./navigation-component/navigation.component";
import { GoogleMapComponent } from "./google-map-component/google-map.component";
import { AboutComponent } from "./about-component/about.component";
import { HomepageRouting } from "./homepage.routing";

const components = [HomepageComponent, HeaderComponent,SidebarComponent,
                    NavigationComponent, GoogleMapComponent, AboutComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    FormsModule,
   // AgmCoreModule.forRoot({apiKey: 'AIzaSyBQpZ7EuMEfgN_gaQZxmBVeix26x3iF36Q'}),
    HomepageRouting],
  bootstrap: [HomepageComponent]
})

export class HomepageModule {}
