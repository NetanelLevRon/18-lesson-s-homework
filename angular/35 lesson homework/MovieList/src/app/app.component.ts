import { Component } from '@angular/core';
import {MovieInfo} from './shared/models/movie-info.model';
import {RootObject} from './shared/models/movie-root-object.model';
import {movieInfo} from './shared/models/movie-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
this.moviesInfo=movieInfo;
  }
 
  public moviesInfo:RootObject;
  public selectMovie:MovieInfo;

  public setSelectMovie(movieName:string):void{
    for (let i of this.moviesInfo.items){
      if (i.movie_name==movieName){
        this.selectMovie=i;
      }
    }
  }
}
