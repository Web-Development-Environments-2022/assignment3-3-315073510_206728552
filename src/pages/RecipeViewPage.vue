<template>
  <div class="container all card">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
     
        <img :src="recipe.image" class="img"  />
        <div id="header-details">
          <h1 id="title">{{ recipe.title }}</h1>
          <RecipeCategoryGrid :isWatched="isWatched" :recipe="recipe"></RecipeCategoryGrid>
          
          <div class="quant-txt">Ready in : <span class="quantity">{{ recipe.readyInMinutes }} minutes</span></div>
          <div class="quant-txt">Likes : <span class="quantity">{{ recipe.aggregateLikes }} likes</span></div>
        </div>
        <FavoritButton class="favBtn" :size="20" :isFavorit="isFavorit" :recipe="recipe"></FavoritButton>
        
      </div>
      <b-row  class="recipe-body">
         <b-col>
          <span class="i-title">Instructions</span>
            
            <div>
              <div class="small-card" v-for="s in recipe._instructions" :key="s.number">
                {{ isMyRecipe?s:s.step }}
              </div>
            </div>
        </b-col>
        <b-col >
          <span class="i-title" > Ingredients </span>
            
            <div >
          
              <div 
                v-for="(r, index) in recipe.extendedIngredients" class="small-card" 
                :key="index + '_' + r.id"
              >
                {{ isMyRecipe?r:r.original }}
              </div>
            </div>
        </b-col>
       
      </b-row>
      
    </div>
     <div id="spinner-div" v-else>
        <b-spinner  label="Spinning"></b-spinner>
        <span>Loading page, please wait</span>
      </div>
  </div>
</template>

<script>
import api from '../services/api'
import RecipeCategoryGrid from '../components/RecipeCategoryGrid.vue';
import FavoritButton from '../components/FavoritButton.vue';
export default {
    data() {
        return {
            recipe: null,
            isFavorit:Boolean,
            isWatched:Boolean,
            isMyRecipe:Boolean
            
        };
    },
    async created() {
        try {
         

            let response;
            let rid = this.$route.params.recipeId;
            this.isWatched = this.$route.query.isWatched=='true';
            this.isMyRecipe = this.$route.query.isMyRecipe=='true';
            this.isFavorit = this.$route.query.isFavorit=='true';
            // send watch indicator to db
            await api.Watch(rid)
 
            try {

                //getting detailed recipe
                response = await api.getRecipe(rid,this.isMyRecipe);

                //go to not found page if couldnt find the recipe
                if (response.status !== 200)
                    this.$router.replace("/NotFound");
            }
            catch (error) {
                // console.log("error.response.status", error.response.status);
                this.$router.replace("/NotFound");
                return;
            }
            //process the recipe object
            // let rid,analyzedInstructions, instructions, extendedIngredients, aggregateLikes, readyInMinutes, image, title, vegan, vegetarian, glutenFree }=undefined
           let _instructions;
             let { id,analyzedInstructions, instructions, extendedIngredients, aggregateLikes, readyInMinutes, image, title, vegan, vegetarian, glutenFree, } = response.data;
             if(this.isMyRecipe){
                  id=id??response.data.rid
                  _instructions=analyzedInstructions??response.data.instructions
                  extendedIngredients=response.data.ingredients
                  aggregateLikes=aggregateLikes??response.data.popularity
                  vegan=vegan!=0
                  vegetarian=vegetarian!=0
                  glutenFree=glutenFree!=0
             }
             else{
                _instructions = analyzedInstructions
                            .map((fstep) => {
                            fstep.steps[0].step = fstep.name + fstep.steps[0].step;
                            return fstep.steps;
                        })
                            .reduce((a, b) => [...a, ...b], []);
             }

      
               
            
              
            
            let _recipe = {
              id,
                instructions,
                _instructions,
                analyzedInstructions,
                extendedIngredients,
                aggregateLikes,
                readyInMinutes,
                image,
                title,
                vegan,
                vegetarian,
                glutenFree,
            };
            this.recipe = _recipe;
            
         
        }
        catch (error) {
            console.log(error);
        }
    },
    components: { RecipeCategoryGrid, FavoritButton }
};
</script>

<style scoped>
.wrapper {
  display: flex;
}
.wrapped {
  width: 50%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.flex-center{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.img{
  width: 20rem;
  height: 15rem;
  border-radius: 20px;
}
.recipe-header{
  display: flex;

  
}

#header-details{
  margin-left: 20px;
}
.favBtn{
  position: relative;
  margin-right: 20px;
  margin-left: 30px;
   margin-top: 10px;
  
}
.i-title{
  font-size: 18px;
}
.all{
  margin-top: 10px;

}
.card{
  box-shadow: 0px 1px 30px rgba(0, 0, 0, 0.061);
  padding: 20px;
  border-radius: 20px;
}
.small-card{
  margin-top: 10px;
    box-shadow: 0px 0px 4px rgba(0, 63, 126, 0.092);
  padding: 10px;
  width: 95%;
  border-radius: 10px;
}
.quantity{

  color: rgb(70, 144, 209);
}


.quant-txt{
  font-size: 14px;
}
#spinner-div{
  display: flex;
  justify-content: center;
}
</style>
