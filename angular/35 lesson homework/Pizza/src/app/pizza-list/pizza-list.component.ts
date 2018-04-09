import { Component, OnInit } from '@angular/core';
import {PizzaInfo} from './../shared/models/pizza-info.model';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent {

public pizzaArr=new PizzaInfo().getInfo();


}
