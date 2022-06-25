<template>
  <router-link
    :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
    class="recipe-preview"
  >
    <div class="recipe-body">
      <img v-if="image_load" :src="recipe.image" class="recipe-image" />
    </div>
    <div class="recipe-footer">
      <div :title="recipe.title" class="recipe-title">
        {{ recipe.title }}
      </div>
      <div class="recipe-overview">
        <span id="minuts"><b-icon-clock class="icon"></b-icon-clock>{{ recipe.readyInMinutes }} minutes</span>
        <span id="likes"><b-icon-hand-thumbs-up class="icon"></b-icon-hand-thumbs-up>{{ recipe.popularity }} likes</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  mounted() {
    this.axios.get(this.recipe.image).then((i) => {
      this.image_load = true;
    });
  },
  data() {
    return {
      image_load: false
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true
    }

  }
};
</script>

<style scoped>
.recipe-title{
text-overflow: ellipsis;
  overflow: hidden; 


  white-space: nowrap;
  text-align: center;
  color: black;

}
.recipe-body{
  width: 260px;
}
.recipe-footer{
  width: 250px;
  text-align: center;
}
.recipe-preview{
  text-decoration: none;
  max-width: 260px !important;

}
.recipe-image{
  
  width: 250px;
  height: 170px;
}
#minuts{
  color: black;
  font-style: none !important;
  margin-right: 20px;
}
#likes{
  color: #00308F;
}

.icon{
  margin-right: 5px;
  font-size: 16px;
}

</style>
