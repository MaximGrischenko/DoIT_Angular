import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";

import { AuthComponent } from "./auth.component";
import { SingInComponent } from "./sign-in-component/sing-in.component";
import { SignUpComponent } from "./sign-up-component/sign-up.component";
import { RecoveryComponent } from "./recovery-component/recovery.component";

const childRoutes: Routes = [
  {
    path: 'sign-in',
    component: SingInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'recovery',
    component: RecoveryComponent
  }
];

const authRoutes: Routes = [
  {
   path: '', component: AuthComponent, children: childRoutes
  }
];

export const AuthRouting: ModuleWithProviders = RouterModule.forChild(authRoutes);
