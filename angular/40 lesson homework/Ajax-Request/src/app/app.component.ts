import { Component } from '@angular/core';
import { PersonsService } from './shared/services/persons-service.services';
import { PersonsInfo } from './shared/modules/pesons-info.model';
import { PersonsData } from './shared/modules/pesons-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  allPersons:PersonsInfo;

  constructor(private myPersonsService:PersonsService){
  this.allPersons=this.myPersonsService.personsInfo;
  }

}
