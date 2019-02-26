import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { TestSassComponent } from "./test-sass/test-sass.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
  {
    path: "",
    component: TestSassComponent
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
