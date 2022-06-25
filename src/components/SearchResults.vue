<template>
  <div class="container">
    <h1>Results:</h1>
    <RecipePreviewList  :recipes="recipesToShow" title=""/>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
export default {
  name:'SearchResults',
  components: {
    RecipePreviewList
  },
  props: {
    //recipesToShow: Array
  },
  data(){
    return {
        recipesToShow:[{
                          "id": 661340,
                          "title": "Spinach Salad with Strawberry Vinaigrette",
                          "image": "https://spoonacular.com/recipeImages/661340-556x370.jpg",
                          "readyInMinutes": 45,
                          "popularity": 15,
                          "vegan": false,
                          "vegetarian": false,
                          "glutenFree": true
                      }]
    }
  },
  created(){
    }

};

</script>

<style>

</style>
