import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

public mat:Array<Array<number>>=new Array<Array<number>>();


func():void{

  for(let i=0;i<10;i++){
    this.mat.push([i]);
    for(let j=0;j<10;j++){   
  this.mat[i][j]=((j+1)*(i+1));
    }
  }

}

constructor(){
  this.func();
}

}
