import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AuthComponent } from "./auth.component";
import { SingInComponent } from "./sign-in-component/sing-in.component";
import { SignUpComponent } from "./sign-up-component/sign-up.component";
import { RecoveryComponent } from "./recovery-component/recovery.component";
import { AuthRouting } from "./auth.routing";
import { AuthPopupComponent } from "../../components/popup_component/auth-popup.component";

const components = [AuthComponent, SingInComponent, SignUpComponent, RecoveryComponent, AuthPopupComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, FormsModule, AuthRouting],
  bootstrap: [AuthComponent]
})

export class AuthModule {}
