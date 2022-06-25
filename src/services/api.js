import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";
// axios.defaults.withCredentials=true
Vue.use(VueAxios, axios);
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
    static async getRecipe(rid) {
      return await axios.get(
        `http://localhost/recipes/recipe?rid=${rid}`,
      );
    }
     //===========user=========
    static async getWatched() {
      try {
        const response = await axios.get(
          `http://localhost/users/watch`,
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
      }
    }
    static async setFavorit() {
        try {
          const response = await axios.post(
            `http://localhost/users/favorites`,
          );
         return response.data
        } catch (error) {
          console.log(error);
        }
      }
    
}
