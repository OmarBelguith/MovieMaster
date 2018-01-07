import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { ActorComponent } from './components/actor/actor.component';
import { GenresComponent } from './components/genres/genres.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MoviesComponent } from './components/movies/movies.component';
import { PopularSeriesComponent } from './components/popular-series/popular-series.component';
import { SerieComponent } from './components/serie/serie.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {MoviesService} from './services/movies.service';
import {FormsModule} from '@angular/forms';
import { ShowCaseComponent } from './components/show-case/show-case.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorComponent,
    GenresComponent,
    MovieComponent,
    MovieCardComponent,
    MoviesComponent,
    PopularSeriesComponent,
    SerieComponent,
    UpcomingComponent,
    NavBarComponent,
    ShowCaseComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
