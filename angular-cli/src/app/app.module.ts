import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule , Routes } from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewslistComponent } from './newslist/newslist.component'

/*引入路由模块*/
import { AppRoutingModule} from "./app.routing.module";



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NewslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
