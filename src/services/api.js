import axios from "axios";
export default class api{
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
        const response = await axios.get(
          `http://localhost/recipes/randomRecipes?quantity=${quantity}`,
        );
       return response.data
      } catch (error) {
        console.log(error);
      }
    }
    
}
