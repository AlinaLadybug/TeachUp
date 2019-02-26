import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { AuthComponent } from "./components/auth/auth.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

const appRoutes: Routes = [
  {
    path: "",
    component: AuthComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
