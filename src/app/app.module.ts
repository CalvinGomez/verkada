import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule, MatIconModule, MatProgressSpinnerModule, MatGridListModule, MatCardModule, MatMenuModule, MatListModule } from '@angular/material';
import { Restangular, RestangularModule } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';

import { ThumbnailsComponent } from './thumbnails/thumbnails.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ThumbnailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
