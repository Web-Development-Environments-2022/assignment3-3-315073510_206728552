<template>
  <div class="container">
    <h1 class="title">Favorit Recipes </h1>
      <RecipesGrid v-if="recipes.length" :recipes="recipes"></RecipesGrid>
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
       recipes:[]
    }
  
  },
  created(){
    api.getFavoriteRecipes().then(r=>this.recipes=r)
  }
}
</script>
<style>
#spinner-div{
  display: flex;
  justify-content: center;
}
</style>