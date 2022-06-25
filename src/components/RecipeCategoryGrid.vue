<template>
    <div class="food-categories">
      <b-row>
          <b-col>
            <span v-if="isWatched" id="watched"><b-icon-envelope-open-fill id="env"></b-icon-envelope-open-fill> Watched</span>
          </b-col>
        </b-row>
        <b-row>
                <b-col v-if="recipe.vegan"><b-icon-info-circle-fill class="cat-icon"></b-icon-info-circle-fill>  Vegan</b-col>
                <b-col v-if="recipe.vegetarian"><b-icon-info-circle-fill class="cat-icon"></b-icon-info-circle-fill> Vegetarian</b-col>
        </b-row>
        <b-row>
                 <b-col v-if="recipe.glutenFree"><b-icon-info-circle-fill class="cat-icon"></b-icon-info-circle-fill> Gluten Free</b-col>
                <b-col v-if="!recipe.glutenFree"><b-icon-info-circle-fill class="cat-icon"></b-icon-info-circle-fill> Contain Gluten</b-col>
        </b-row>
        
        
    </div>
</template>

<script>
export default{
  name:'RecipeCategoryGrid',
    props: {
        recipe: {
        type: Object,
        required: true
        },
        isWatched: {
        type: Boolean,
        required: true
        },
    }
}

</script>
<style>

.food-categories{
  color: rgb(62, 153, 62);
  font-size: 14px;
  width: 260px;
}
.cat-icon{
  position: relative;
  top: -2px;
  font-size: 10px;
  margin-right: 4px;
}
#watched{
  color: rgb(192, 66, 66);
  font-family:'Brush Script MT';
  font-size: 20px;
}
#env{
  position: relative;
  top:-2px;
  font-size: 12px;
  margin-right: 5px;
}
</style>