<template>
  <div class="container">
    <h1 class="title">Favorit Recipes </h1>
      <RecipesGrid v-if="favoritRecipes.length" :watched="lastWatched" :favorits="favoritRecipes" :recipes="favoritRecipes"></RecipesGrid>
      <div v-else id="spinner-div">
        <b-spinner  label="Spinning"></b-spinner>
      </div>
  </div>

</template>
<script>
import api from '../services/api'
import RecipesGrid from '../components/RecipesGrid'

export default{
  name:'FavoritRecipes',
  components: {
    RecipesGrid
},
  data(){
    return{
        lastWatched:[],
      favoritRecipes:[],
    }
  
  },

  created(){
        api.getWatched().then(r=>this.lastWatched=r)
     api.getFavoriteRecipes().then(r=>this.favoritRecipes=r)
  }
}
</script>
<style>
#spinner-div{
  display: flex;
  justify-content: center;
}
</style>