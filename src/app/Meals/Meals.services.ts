import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Meal } from "./Meal";

@Injectable({
  providedIn: "root"
}
)
export class MealsServices{

  // Conexão local
 // private mealsUrl: string = 'http://localhost:8080/api/v1/meals';

 private mealsUrl: string = 'https://meals-project-api.herokuapp.com/api/v1/meals';

  constructor(private httpClient: HttpClient){}

  retrieveAll(): Observable<Meal[]> {
    return this.httpClient.get<Meal[]>(this.mealsUrl);
  }

  retrieveById(id: number): Observable<Meal> {
    return this.httpClient.get<Meal>(`${this.mealsUrl}/${id}`);
  }

  save(meal: Meal): Observable<Meal> {
  return this.httpClient.post<Meal>(`${this.mealsUrl}`, meal);

}

deleteById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.mealsUrl}/${id}`);
}


}

// Test

var MEALS: Meal[] = [

{   "id": 2,
    "image":"https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg",
    "name":"Burek",
    "category":"Side",
    "area":"Croatian",
    "instructions":"Fry the finely chopped onions and minced meat in oil. Add the salt and pepper. Grease a round baking tray and put a layer of pastry in it. Cover with a thin layer of filling and cover this with another layer of filo pastry which must be well coated in oil. Put another layer of filling and cover with pastry. When you have five or six layers, cover with filo pastry, bake at 200ºC/392ºF for half an hour and cut in quarters and serve."
},
{   "id": 3,
    "image":"https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg",
    "name":"Kumpir",
    "category":"Side",
    "area":"Turkish",
    "instructions":"If you order kumpir in Turkey, the standard filling is first, lots of butter mashed into the potato, followed by cheese. There’s then a row of other toppings that you can just point at to your heart’s content – sweetcorn, olives, salami, coleslaw, Russian salad, allsorts – and you walk away with an over-stuffed potato because you got ever-excited by the choices on offer.\r\n\r\nGrate (roughly – you can use as much as you like) 150g of cheese.\r\nFinely chop one onion and one sweet red pepper.\r\nPut these ingredients into a large bowl with a good sprinkling of salt and pepper, chilli flakes (optional)."
},
{   "id": 4,
    "image":"https://www.themealdb.com/images/media/meals/n3xxd91598732796.jpg",
    "name":"Tamiya",
    "category":"Vegetarian",
    "area":"Egyptian",
    "instructions":"oak the beans in water to cover overnight.Drain. If skinless beans are unavailable, rub to loosen the skins, then discard the skins. Pat the beans dry with a towel.\r\nGrind the beans in a food mill or meat grinder.If neither appliance is available, process them in a food processor but only until the beans form a paste. (If blended too smoothly, the batter tends to fall apart during cooking.) Add the scallions, garlic, cilantro, cumin, baking powder, cayenne, salt, pepper, and coriander, if using.  Refrigerate for at least 30 minutes.\r\nShape the bean mixture into 1-inch balls.Flatten slightly and coat with flour.\r\nHeat at least 1½-inches of oil over medium heat to 365 degrees.\r\nFry the patties in batches, turning once, until golden brown on all sides, about 5 minutes."
},
{   "id": 5,
    "image":"https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg",
    "name":"Dal fry",
    "category":"Vegetarian",
    "area":"Indian",
    "instructions":"Wash and soak toor dal in approx. 3 cups of water, for at least one hours. Dal will be double in volume after soaking. Drain the water.\r\nCook dal with 2-1/2 cups water and add salt, turmeric, on medium high heat, until soft in texture (approximately 30 mins) it should be like thick soup.\r\nIn a frying pan, heat the ghee. Add cumin seeds, and mustard seeds. After the seeds crack, add bay leaves, green chili, ginger and chili powder. Stir for a few seconds.\r\nAdd tomatoes, salt and sugar stir and cook until tomatoes are tender and mushy.\r\nAdd cilantro and garam masala cook for about one minute.\r\nPour the seasoning over dal mix it well and cook for another minute.\r\nServe with Naan."
},
{   "id": 6,
    "image":"https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg",
    "name":"Poutine",
    "category":"Miscellaneous",
    "area":"Canadian",
    "instructions":"Heat oil in a deep fryer or deep heavy skillet to 365°F (185°C).\r\nWarm gravy in saucepan or microwave.\r\nPlace the fries into the hot oil, and cook until light brown, about 5 minutes.\r\nRemove to a paper towel lined plate to drain.\r\nPlace the fries on a serving platter, and sprinkle the cheese over them.\r\nLadle gravy over the fries and cheese, and serve immediately."
},
{   "id": 7,
    "image":"https://www.themealdb.com/images/media/meals/txsupu1511815755.jpg",
    "name":"Timbits",
    "category":"Dessert",
    "area":"Canadian",
    "instructions":"Sift together dry ingredients.\r\nMix together wet ingredients and incorporate into dry. Stir until smooth.\r\nDrop by teaspoonfuls(no bigger) into hot oil (365 degrees, no hotter), turning after a few moments until golden brown on all sides.\r\nRemove and drain.\r\nRoll in cinnamon sugar while still warm and serve."
}
]
