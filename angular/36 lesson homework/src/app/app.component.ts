import { Component } from '@angular/core';
import { movieData } from './shared/models/movie-data.model';
import { RootObject } from './shared/models/movie-root-object.model';
import { MovieInfo } from './shared/models/movie-info.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(){
    this.moviesInfo=movieData;
      }
     
      public moviesInfo:RootObject;
      public selectMovie:MovieInfo;
    
      public currentMovie(movieName:string):void{
        for (let i of this.moviesInfo.items){
          if (i.movie_name==movieName){
            this.selectMovie=i;
          }
        }
      }
}
