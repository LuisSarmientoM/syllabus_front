import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { MaterialModule } from "../material.module";
import { LoginGuard } from "../services/guards/login.guard";
import { LoginService } from "../components/login/login.service";
import { HttpClientModule } from "@angular/common/http";
import { LoadComponent } from "./load/load.component";

@NgModule({
    declarations: [NavbarComponent, SidebarComponent, LoadComponent],
    imports: [
        CommonModule,
        SharedRoutingModule,
        MaterialModule,
        HttpClientModule,
    ],
    exports: [LoadComponent],
    providers: [LoginGuard, LoginService],
})
export class SharedModule {}
