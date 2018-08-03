import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthGuardService } from "./services/auth-guard.service";
import { HttpClientModule } from "@angular/common/http";
//import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
//import { DataProvider } from "./data/in-memory-data.provider";

import { AppRouting } from "./app.routing";
import { AppComponent } from './app.component';
import { NotFoundComponent } from "./components/not_found-component/not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
//    HttpClientInMemoryWebApiModule.forRoot(DataProvider),
    AppRouting
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
