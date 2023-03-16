import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { EditableElementComponent } from './editable-element/editable-element.component';
import { ListingRouteComponent } from './listing-route/listing-route.component';
import { AboutRouteComponent } from './about-route/about-route.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundRouteComponent } from './not-found-route/not-found-route.component';
import { DetailsRouteComponent } from './details-route/details-route.component';
import { CreateRouteComponent } from './create-route/create-route.component';
@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponent,
    EditableElementComponent,
    ListingRouteComponent,
    AboutRouteComponent,
    NavigationComponent,
    NotFoundRouteComponent,
    DetailsRouteComponent,
    CreateRouteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
