import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.css']
})
export class ShowCaseComponent implements OnInit {
  genres: Array<Object>;

  constructor(private _moviesServices: MoviesService) {
    this._moviesServices.getGenres().subscribe(res => {
      this.genres = res.genres.slice(0, 20);
    });
  }

  ngOnInit() {
  }

}
