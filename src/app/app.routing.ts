import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService as AuthGuard } from "./services/auth-guard.service";

import { NotFoundComponent } from "./components/not_found-component/not-found.component";

const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: './modules/auth-module/auth.module#AuthModule'
  },
  {
    path: 'app',
    loadChildren: './modules/homepage-module/homepage.module#HomepageModule',
    canActivate: [AuthGuard]
  },
  {
    path: '**', component: NotFoundComponent
  }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
