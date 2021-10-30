import { Component, OnInit } from '@angular/core';
import { Meal } from './Meal';
import { MealsServices } from './Meals.services';

@Component({
  templateUrl: './Meals.component.html',
  styleUrls: ['./Meals.component.css']
})
export class MealsComponent implements OnInit {

  constructor(private mealsservices: MealsServices) { }

  filteredMeals: Meal[] = [];

  _meals: Meal[]=[];

  _filterBy: string;

  ngOnInit(): void {

    this.retriveAll();

  }

    retriveAll(): void {
      this.mealsservices.retrieveAll().subscribe({
        next: meals => this._meals = meals,
        error: err => console.log('Error', err)

      });

    }


  set filter(value: string){
    this._filterBy = value;

    this.filteredMeals = this._meals.filter((meal:Meal) => meal.name.toLocaleLowerCase()
                        .indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter(){
    return this._filterBy;
  }

}
