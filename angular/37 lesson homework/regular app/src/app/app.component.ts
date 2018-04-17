import { Component } from '@angular/core';
import {VegList} from './shared/models/vegs.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  vegList:VegList=new VegList();
  searchVeg:string;
  outputVegsArr:string[];
  errMsg:string;

  searchVegFunc():void{
    this.errMsg="";
    this.outputVegsArr=new Array<string>();
    if(this.searchVeg.length>1){
      this.errMsg="please enter one char onley";
    }
    else {

      for(let i=0;i<this.vegList.allVegsArr.length;i++){
        if(this.searchVeg==this.vegList.allVegsArr[i].charAt(1)){
          this.outputVegsArr.push(this.vegList.allVegsArr[i]);
        }
      }
    }    
  }
}
