import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popularList: Array<Object>;
  theatersList: Array<Object>;
  topRatedList: Array<Object>;
  searchRes: Array<Object>;
  searchStr: string;
  constructor(private _moviesService: MoviesService) { }

  ngOnInit() {
    this._moviesService.getPopular().subscribe(res => {
      this.popularList = res.results;
    });
    this._moviesService.getInTheaters().subscribe(res => {
      this.theatersList = res.results;
    });
    this._moviesService.getTopRatedMovies().subscribe(res => {
      this.topRatedList = res.results;
    });
  }
  searchMovies() {
    this._moviesService.searchMovies(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
    })
  }

}
