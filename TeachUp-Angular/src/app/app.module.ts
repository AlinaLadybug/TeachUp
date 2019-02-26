import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { AuthComponent } from "./components/auth/auth.component";

import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, AuthComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
