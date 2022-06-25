<template>
  <div class="container">
    <b-row class="main-content">
    <b-col>
      <RecipePreviewList  :recipes="randomRecipes" title="Explore this recipes"  />
      <b-button id="newRandomsBtn" variant="outline-primary" @click="newRandoms">Get New Random Recipes</b-button>
    </b-col>
    <b-col></b-col>
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
  created(){
    api.getRandomRecipes(3).then(recipes=>this.randomRecipes=recipes)  
    api.getWatched().then(recipes=>this.lastWatched=recipes)  
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
  margin-left: 35px;
  margin-top: 10px;
}
.main-content{
  margin-top: 5px;
}
</style>
