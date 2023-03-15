import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { EditableElementComponent } from './editable-element/editable-element.component';
@NgModule({
  declarations: [AppComponent, PokemonCardComponent, EditableElementComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
