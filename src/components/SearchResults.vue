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
    recipesToShow: Array
  },
  data(){
    return {
    }
  },
  created(){
    }

};

</script>

<style>

</style>
