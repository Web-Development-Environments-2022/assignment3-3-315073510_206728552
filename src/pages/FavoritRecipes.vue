<template>
  <div class="container">
    <h1 class="title">Favorit Recipes </h1>
      <div v-if="favoritRecipes.length==0" >
        No favorit recipes yet
      </div>
      <div id="spinner-div" v-else-if="favoritRecipes==undefined">
        <b-spinner  label="Spinning"></b-spinner>
      </div>
      <RecipesGrid v-else-if="favoritRecipes!=undefined" :watched="lastWatched" :favorits="favoritRecipes" :recipes="favoritRecipes"></RecipesGrid>
      
      
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
        lastWatched:Array,
      favoritRecipes:Array,
    }
  
  },

  async created(){
    this.lastWatched=await api.getWatched()
     this.favoritRecipes=await api.getFavoriteRecipes()
  }
}
</script>
<style>
#spinner-div{
  display: flex;
  justify-content: center;
}
</style>