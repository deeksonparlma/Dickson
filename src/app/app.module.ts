import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SkillsComponent } from './skills/skills.component';

import { NgxSpinnerModule } from "ngx-spinner";
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

@NgModule({
  // schemas:[NO_ERRORS_SCHEMA],
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
