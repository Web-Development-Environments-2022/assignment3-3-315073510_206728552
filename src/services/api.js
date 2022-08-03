import axios from "axios";

axios.defaults.withCredentials=true

export default class api{
  static stub_recipes=[
    
    {
        "id": 631868,
        "title": "4 Ingredient Chicken Pot Pie",
        "image": "https://spoonacular.com/recipeImages/631868-556x370.jpg",
        "readyInMinutes": 45,
        "popularity": 24,
        "vegan": false,
        "vegetarian": false,
        "glutenFree": false
    },
    {
        "id": 658007,
        "title": "Raw Vegan Chocolate and Raspberry Cake",
        "image": "https://spoonacular.com/recipeImages/658007-556x370.jpg",
        "readyInMinutes": 45,
        "popularity": 76,
        "vegan": false,
        "vegetarian": false,
        "glutenFree": false
    },
    {
        "id": 633251,
        "title": "Bacalhau Macau",
        "image": "https://spoonacular.com/recipeImages/633251-556x370.jpg",
        "readyInMinutes": 45,
        "popularity": 9,
        "vegan": false,
        "vegetarian": false,
        "glutenFree": false
    }
]  
    
    static api_base='http://localhost'
  //===========auth=========
    static async register(body){

      const response = await axios.post(
        `http://localhost/register`,body
      );
      return response.data
      
    }
    static async login(body){

      const response = await axios.post(
        `http://localhost/login`,body
      );
      return response.data
      
    }
    //===========recipe=========
    static async getRandomRecipes(quantity) {
      try {
        return this.stub_recipes
        const response = await axios.get(
          `http://localhost/recipes/randomRecipes?quantity=${quantity}`,
        );
       return response.data
      } catch (error) {
        console.log(error);
      }
    }
    static async getRecipe(rid,isMyRecipe) {
      return await axios.get(
        `http://localhost/recipes/recipe?rid=${rid}&isMyRecipe=${isMyRecipe}`
      );
    }

    static async searchRecipes(query, numberOfResultsToDisplay, diet, cuisine, intolerances, sort) {
      console.log(numberOfResultsToDisplay  )
      return await axios.get(
        `http://localhost/recipes/searchRecipe?query=${query}&numberOfResultsToDisplay=${numberOfResultsToDisplay}&diet=${diet}&cuisine=${cuisine}&intolerances=${intolerances}&sort=${sort}&browser=chrome`, {withCredentials:true}
      );
    }
    
     //===========user=========
    static async getWatched(q) {
      try {
        const response = await axios.get(
          `http://localhost/users/watch?q=${q}`,
        );
       return response.data
     
      } catch (error) {
        console.log(error);
        return []
      }
    }
    static async Watch(rid) {
      try {
        const response = await axios.post(
          `http://localhost/users/watch`,{rid:rid}
        );
       return response.data
     
      } catch (error) {
        console.log(error);
      }
    }
    static async getMyRecipes() {
      try {
        const response = await axios.get(
          `http://localhost/users/getMyRecepies`,
        );
       return response.data
      } catch (error) {
        console.log(error);
        return []
      }
    }
    static async getFavoriteRecipes() {
        try {
          const response = await axios.get(
            `http://localhost/users/favorites`,
          );
         return response.data
        } catch (error) {
          console.log(error);
          return []
        }
      }
      static async setFavorit(body) {
        try {
          const response = await axios.post(
            `http://localhost/users/favorites`,body
          );
         return response.data
        } catch (error) {
          console.log(error);
        }
      }
      static async addRecipe(body) {
        try {
          const response = await axios.put(
            `http://localhost/recipes/recipe`,body
          );
         return response.data
        } catch (error) {
          console.log(error);
        }
      }
    
}
