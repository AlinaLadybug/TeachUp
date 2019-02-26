import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TestSassComponent } from "./test-sass/test-sass.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AppRoutingModule } from "./app-routing.module";
import { AuthComponent } from "./auth/auth.component";

@NgModule({
  declarations: [
    AppComponent,
    TestSassComponent,
    PageNotFoundComponent,
    AuthComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
