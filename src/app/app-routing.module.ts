import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AboutRouteComponent } from './about-route/about-route.component';
import { CreateRouteComponent } from './create-route/create-route.component';
import { DetailsRouteComponent } from './details-route/details-route.component';
import { ListingRouteComponent } from './listing-route/listing-route.component';
import { NotFoundRouteComponent } from './not-found-route/not-found-route.component';

const routes: Route[] = [
  {
    path: '',
    component: ListingRouteComponent,
  },
  {
    path: 'about',
    component: AboutRouteComponent,
  },
  {
    path: 'details/:id',
    component: DetailsRouteComponent,
  },
  {
    path: 'create',
    component: CreateRouteComponent,
  },
  {
    path: 'not-found',
    component: NotFoundRouteComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
