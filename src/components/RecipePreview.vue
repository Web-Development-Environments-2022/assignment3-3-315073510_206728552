<template>
  <div class="small-card flex-row"
    @click="goToDetails"
  >


      <img :src="recipe.image" class="recipe-image" />

    <div class="recipe-details">
     
      <div :title="recipe.title" class="recipe-title">
        {{ recipe.title }}
      </div>
       <RecipeCategoryGrid :isWatched="isWatched" :recipe="recipe"></RecipeCategoryGrid>
       
      <b-row class="recipe-overview">
        <b-col class="info">
        <FavoritButton id="fav-btn" :isFavorit="isFavorit" :recipe="recipe" :size="16"></FavoritButton>
        <span id="fav-txt">Favorite</span>
        
        </b-col>
        <b-col id="minuts" class="info">
          <b-icon-clock class="icon"></b-icon-clock>
          <span id="mins">{{ recipe.readyInMinutes }} minutes</span>
        </b-col>
        <b-col id="likes" class="info">
          <b-icon-hand-thumbs-up class="icon"></b-icon-hand-thumbs-up>
          <span>{{ recipe.popularity }} likes
          </span>
        </b-col>
      </b-row>
    </div>

  </div>
</template>

<script>
import RecipeCategoryGrid from './RecipeCategoryGrid.vue';
import FavoritButton from './FavoritButton.vue';
export default {
    // mounted() {
    //     this.axios.get(this.recipe.image).then((i) => {
    //         this.image_load = true;
    //     });
    // },
    data() {
        return {
            isWatched:false,
            isFavorit:false
        };
        
    },
    props: {
        recipe: {
            type: Object,
            required: true
        },
        favoritRecipes: {
            type: Array,
            required: true
        },
        watchedRecipes: {
            type: Array,
            required: true
        },
  
    },
    created(){
      this.updateWatched(JSON.parse(JSON.stringify(this.watchedRecipes)))
      this.updateFavorite(JSON.parse(JSON.stringify(this.favoritRecipes)))
  
    },
    methods:{
      goToDetails(){
        this.$router.replace(`/recipe/${this.recipe.id?this.recipe.id:this.recipe.rid}?isWatched=${this.isWatched}&isMyRecipe=${this.recipe.id?false:true}`);
      },
      updateWatched(watched){
        watched.forEach(recipe=>{
          if((recipe.id==this.recipe.id && this.recipe.id!=undefined) || (recipe.rid==this.recipe.rid && this.recipe.rid!=undefined)){
            this.isWatched=true
          }
        })
      },
      updateFavorite(fav){
        fav.forEach(recipe=>{
          if((recipe.id==this.recipe.id && this.recipe.id!=undefined) || (recipe.rid==this.recipe.rid && this.recipe.rid!=undefined)){
            this.isFavorit=true
          }
        })
      }
    },
    components: { RecipeCategoryGrid, FavoritButton }
};
</script>

<style scoped>
.recipe-title{
text-overflow: ellipsis;
  overflow: hidden; 
  width: 230px;
  white-space: nowrap;
  text-align: center;
  color: black;
  margin-left: 20px;
}
.recipe-body{
  display: flex;
  justify-content: center;
}
.flex-row{
  display: flex;
}
.recipe-details{

  text-align: center;
}
#mins{
  display: flex;
  width: 70px;
}

.recipe-image{
  border-radius: 20px;
  height: 170px;
  max-width: 250px;
  

}
#minuts{
  color: black;
  font-style: none !important;
  margin-right: 20px;
  position: relative;
  left: 10px;
}
#likes{
  color: #00308F;
}
.info{
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-height: 40px;
}
#fav-btn{
  position: relative;
  top:-3px
}
.small-card{
  box-shadow: 0px 0px 10px rgba(0, 63, 126, 0.092);;
  padding: 10px ;
  border-radius: 10px;
  height: 190px;
  width: 530px;
  cursor: pointer;
}
.icon{
  margin-right: 5px;
  font-size: 16px;
}
.recipe-overview{
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  font-size: 14px;
}

#fav-txt{
  color:black;
  position: relative;
  top:-3px;
}
</style>
