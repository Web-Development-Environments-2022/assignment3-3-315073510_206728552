<template>
  <div class="container">
    <h1 class="title">Favorit Recipes </h1>
      <RecipesGrid :recipes="recipes"></RecipesGrid>
  </div>

</template>
<script>
import api from '../services/api'
import RecipesGrid from '../components/RecipesGrid'
import RecipePreviewList from '../components/RecipePreviewList.vue'
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
    api.getMyRecipes().then(r=>this.recipes=r)
  }
}
</script>