import { NgModule } from "@angular/core";
import { RouterModule , Routes} from '@angular/router';

import { NewslistComponent } from "./newslist/newslist.component";
import { AppComponent} from "./app.component";
import { PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const appRouter : Routes = [
  { path :'news', component:NewslistComponent },
  { path :'', component:AppComponent },
//*default router  index*/
  /*{ path: '', redirectTo:'AppComponent' , pathMatch:'full'},*/
  { path : '**' , component :PageNotFoundComponent}
];

@NgModule({
  imports:[
   RouterModule.forRoot(
     appRouter,
     {enableTracing:true}
   )],
    exports:[
      RouterModule
    ]
})

export  class AppRoutingModule{}





