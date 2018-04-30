import { Injectable } from "@angular/core";
import { PersonsInfo } from "../modules/pesons-info.model";
import { HttpClient } from "@angular/common/http";
import { PersonsData } from "../modules/pesons-data.model";


@Injectable()
export class PersonsService{
    personsInfo:PersonsInfo = { data: [] }

    constructor(private myHttpClient:HttpClient){
        this.initData();
    }


    initData():void{
        let apiUrl:string='https://reqres.in/api/users';
        this.myHttpClient.get(apiUrl).subscribe((x:PersonsInfo)=>{this.personsInfo.data=x.data});
        
     
    }
    
}