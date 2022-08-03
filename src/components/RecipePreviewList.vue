<template>
  <b-container class="container">
    <div id="title">
      {{ title }}
    </div>
    <div id="recipe-div"  >
      <div  class="recipe"  v-for="r in recipes" :key="r.id">
        <RecipePreview :favoritRecipes="favoritRecipes" :watchedRecipes="watchedRecipes" :recipe="r" />
      </div>
    </div>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },

  props: {
    title: String,
    recipes:  {
      type: Array,
      required: true
    },
    favoritRecipes:{
      type: Array,
      required: true,
    },
    watchedRecipes:{
      type: Array,
      required: true,
    }
  },
  data() {
    return {

    };
  },
  mounted() {

  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
  width: 530px;

}
.recipe{
  margin-top: 20px;

}
#title{
  font-size:18px;
  // font-weight: 600;
  text-shadow: 0px 0px 5px rgb(171, 171, 171);
 display: flex;
 justify-content: center;
  height: fit-content;

}


</style>
