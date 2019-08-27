import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { DicionarioModule } from './dicionario/dicionario.module';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './dicionario/app.routing.module';
//import { Auth } from './core/auth.service/auth.service.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    //Auth.ServiceComponent
  ],
  imports: [
    BrowserModule,
    DicionarioModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
