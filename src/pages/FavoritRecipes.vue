<template>
  <div class="container">
    <h1 class="title">Favorit Recipes </h1>
      <!-- <RecipePreviewList v-if="recipes.length" :recipes="recipes.filter(r=>)"></RecipePreviewList>
      <RecipePreviewList v-if="recipes.length" :recipes="recipes.filter(recipes.length/2)"></RecipePreviewList> -->
  </div>

</template>
<script>
import api from '../services/api'
import RecipesGrid from '../components/RecipesGrid'
import RecipePreviewList from '../components/RecipePreviewList.vue'
export default{
  name:'FavoritRecipes',
  components: {
    // RecipePreviewList
},
  data(){
    return{
       recipes:[]
    }
  
  },
  created(){
  
    api.getRandomRecipes(5).then(r=>this.recipes=r)
  }
}
</script>