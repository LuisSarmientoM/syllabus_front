import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";
import { MaterialModule } from "src/app/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { FlexLayoutModule } from "@angular/flex-layout";
import { LoginService } from "./login.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule.forChild([{ path: "", component: LoginComponent }]),
        FlexLayoutModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [LoginService]
})
export class LoginModule {}
