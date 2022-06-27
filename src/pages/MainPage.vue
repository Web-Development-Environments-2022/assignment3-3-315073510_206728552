<template>
  <div class="container">
    {{$cookies.get("username")}}
    <b-row class="main-content">
    <b-col >
      <RecipePreviewList  :recipes="randomRecipes" title="Explore this recipes"  />
      <div class="newRandDiv">
        <b-button id="newRandomsBtn" variant="outline-primary" @click="newRandoms">Get New Random Recipes</b-button>
      </div>
    </b-col>
 
    <b-col>
      <router-link v-if="!$root.store.username" to="/login" tag="button">You need to Login to vue this</router-link>
       <RecipePreviewList v-else :recipes="lastWatched" title="Last watched recipes" />
    </b-col>
</b-row>

    
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import api from '../services/api'
export default {
  name:'main-page',
  components: {
    RecipePreviewList
  },
  data(){
    return {
      randomRecipes:[],
      lastWatched:[]
    }
  },
  async created(){
    // api.getRandomRecipes(3).then(recipes=>this.randomRecipes=recipes)
    this.randomRecipes=[
    
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
    this.lastWatched= await api.getWatched()
    this.myRecipes=await api.getMyRecipes()
    },
    methods: { 
      newRandoms(){
        api.getRandomRecipes(3).then(r=>this.randomRecipes=r)  
      }
    }

};
</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}

.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
#newRandomsBtn{
  text-align: center;

  margin-top: 10px;
}
.newRandDiv{
  width: 530px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-content{
  margin-top: 5px;
}
</style>
