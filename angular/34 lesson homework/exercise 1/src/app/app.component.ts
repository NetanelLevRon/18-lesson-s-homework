import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

public mat:Array<Array<number>>=[[]];


func():void{

  for(let i=1;i<=10;i++){
    this.mat.push([i]);
    for(let j=2;j<=10;j++){
  this.mat[i].push(j*i);
    }
  }

}

constructor(){
  this.func();
}

}
