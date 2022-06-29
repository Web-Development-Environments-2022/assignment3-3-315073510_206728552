<template>
  <div class="container">
    <h1 class="title">My Recipes </h1>
      <RecipesGrid v-if="recipes.length" :watched="lastWatched" :favorits="favoritRecipes" :recipes="recipes"></RecipesGrid>
      <div v-else id="spinner-div">
        <b-spinner  label="Spinning"></b-spinner>
      </div>
  </div>

</template>
<script>
import api from '../services/api'
import RecipesGrid from '../components/RecipesGrid'
export default{
  name:'MyRecipes',
  components: {
    RecipesGrid
},
  data(){
    return{
       recipes:[],
        lastWatched:[],
      favoritRecipes:[],
    }
  
  },
    props:{
      randomRecipes:[],
     
  },
  created(){
    api.getMyRecipes().then(r=>this.recipes=r)
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