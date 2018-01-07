import { Routes } from '@angular/router';
import {MoviesComponent} from './components/movies/movies.component';
import {MovieComponent} from './components/movie/movie.component';
import {SerieComponent} from './components/serie/serie.component';
import {ActorComponent} from './components/actor/actor.component';
import {GenresComponent} from './components/genres/genres.component';
import {UpcomingComponent} from './components/upcoming/upcoming.component';
import {PopularSeriesComponent} from './components/popular-series/popular-series.component';


export const appRoutes: Routes = [
    {path: '', component: MoviesComponent},
    {path: 'movie/:id', component: MovieComponent},
    {path: 'tv/:id', component: SerieComponent},
    {path: 'actor/:id', component: ActorComponent},
    {path: 'genres/:id/:name', component: GenresComponent},
    {path: 'upcoming', component: UpcomingComponent},
    {path: 'popular/series', component: PopularSeriesComponent},
];
