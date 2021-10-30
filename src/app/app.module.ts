import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { CreateMealCompoment } from './Meals/Create.meal.component';
import { ErrorPagComponent } from './Meals/Error-pag/Error.pag.component';
import { MealsComponent } from './Meals/Meals.component';
import { NavBarComponent } from './Meals/Nav-bar/Nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
      MealsComponent,
      NavBarComponent,
      ErrorPagComponent,
      CreateMealCompoment,

   ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'meals', pathMatch: 'full'
      },
      {
        path: 'meals', component: MealsComponent
      },
      {
        path:'create', component: CreateMealCompoment
      },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
