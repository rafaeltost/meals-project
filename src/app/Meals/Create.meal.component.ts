import { Component, OnInit } from "@angular/core";
import {FormBuilder,  FormGroup, Validators} from "@angular/forms";
import { Router } from "@angular/router";
import { Meal } from "./Meal";
import { MealsServices } from "./Meals.services";

@Component({
  templateUrl:'./Create.meal.component.html'
})
export class CreateMealCompoment implements OnInit{

  MealForm: FormGroup;

  meal: Meal;

  get formControls(): any{
    return this.MealForm.controls
  }


  constructor(private mealsservices: MealsServices, private formBuilder: FormBuilder,private router: Router ){}

  ngOnInit(): void {
    this.createForm(new Meal());
  }

  createForm(meal: Meal) {
    this.MealForm = this.formBuilder.group({
      image: ['', [Validators.required]],
      name: ['', [Validators.required]],
      category: ['',[Validators.required]],
      area: ['',[Validators.required]],
      instructions:['',[Validators.required]]
    })
  }


  save(): void {
    this.mealsservices.save( this.MealForm.value).subscribe({
        next: meal => console.log('Saved with success', meal),
        error: err => console.log('Error', err)
    });
    this.router.navigate(['']);
    this.mealsservices.retrieveAll();
  }

}
