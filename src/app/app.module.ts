import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { MainPageComponent } from './star-wars/main-page/main-page.component';
import { StarWarsModule } from './star-wars/star-wars.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    StarWarsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
