<template>
  <b-container class="container">
    <span id="title">
      {{ title }}
    </span>
    <div id="recipe-div">
      <div class="recipe"  v-for="r in recipes" :key="r.id">
        <RecipePreview  :recipe="r" />
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
    title: {
      type: String,
      required: true
    },
    recipes: Array
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

}
.recipe{
  margin-top: 20px;
  width: 260px;
  
}
#title{
  font-size:18px;
  // font-weight: 600;
  text-shadow: 0px 0px 5px rgb(171, 171, 171);
 display: flex;
 justify-content: center;
  height: fit-content;
  width: 250px;
}


</style>
