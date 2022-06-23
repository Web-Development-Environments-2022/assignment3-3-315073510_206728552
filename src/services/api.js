import axios from "axios";
export default class api{

    static async getRandomRecipes() {
      try {
        const response = await axios.get(
           "http://localhost/recipes/randomRecipes?quantity=3",
        );
       return response.data
      } catch (error) {
        console.log(error);
      }
    }
}
