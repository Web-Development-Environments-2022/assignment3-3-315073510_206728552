<template>
<div class="grid">
    <RecipePreviewList v-if="evenRecipes.length"  :recipes="evenRecipes"></RecipePreviewList>
    <RecipePreviewList v-if="oddRecipes.length"  :recipes="oddRecipes"></RecipePreviewList>
    
</div>
</template>
<script>
import RecipePreviewList from './RecipePreviewList.vue';
export default {
    name: "RecipesGrid",
    props: {
        recipes: [],
    },
    data() {
        return {
            evenRecipes:[],
            oddRecipes:[]
        };
    },
    created() {

            for (let i = 0; i < this.recipes.length; i++) {
                if(i%2==0){
                    this.evenRecipes.push(this.recipes[i])
                }
                else{
                    this. oddRecipes.push(this.recipes[i])
                }
            }         
    },
    methods: {



    },
    components: { RecipePreviewList }
}
</script>
<style scoped>
.grid{
     display: flex;
    justify-content: space-around;
    width: 100%;
}
</style>