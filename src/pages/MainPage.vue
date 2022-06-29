<template>
  <div class="container">
    {{$cookies.get("username")}}
    <b-row class="main-content">
    <b-col >
      <RecipePreviewList :watchedRecipes="lastWatched" :favoritRecipes="favoritRecipes"  :recipes="randomRecipes" title="Explore this recipes"  />
      <div class="newRandDiv">
        <b-button id="newRandomsBtn" variant="outline-primary" @click="newRandoms">Get New Random Recipes</b-button>
      </div>
    </b-col>
 
    <b-col>
      <router-link v-if="!$root.store.username" to="/login" tag="button">You need to Login to vue this</router-link>
       <RecipePreviewList v-else :watchedRecipes="lastWatched" :favoritRecipes="favoritRecipes" :recipes="lastWatched" title="Last watched recipes" />
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
    
    }
  },
  props:{
      randomRecipes:[],
      lastWatched:[],
      favoritRecipes:[],
  },
  async created(){
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
