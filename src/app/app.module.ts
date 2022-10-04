import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NirvanaComponent } from './components/musica/nirvana/nirvana.component';
import { LedZeppComponent } from './components/musica/led-zepp/led-zepp.component';
import { PinkFloydComponent } from './components/musica/pink-floyd/pink-floyd.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NirvanaComponent,
    LedZeppComponent,
    PinkFloydComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
