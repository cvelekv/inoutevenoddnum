import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EvenComponent } from './components/even.component';
import { GameControl } from './components/game-control.component';
import { OddComponent } from './components/odd.component';

@NgModule({
  declarations: [AppComponent, OddComponent, EvenComponent, GameControl],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
