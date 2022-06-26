<template>
<div class="grid">
    <b-row class="row" v-for="(group,i) in dividedRecipes" :key="i%numPerRow">
        <b-col><RecipePreview v-for="(r,j) in group" :key="j"  :recipe="group[j]"></RecipePreview></b-col>
    </b-row>
</div>
</template>
<script>
import RecipePreview from './RecipePreview.vue'
export default {
    name: "RecipesGrid",
    props: {
        recipes: [],
        
    },
    data(){
        return {
            dividedRecipes:[],
            numPerRow:2,
        }
    },
    created(){
        this.dividedRecipes=this.divide()
    },
    methods: {
        divide() {
   
            let res = [];
            for (let i = 0; i < this.recipes.length; i += this.numPerRow) {
                let cur = [];
                for (let j = 0; j < this.numPerRow; j++) {
                    cur.push(this.recipes[i + j]);
                }
                res.push(cur);
                if (this.recipes.length - i < this.numPerRow) {
                    let cur = [];
                    for (let k = i; k < this.recipes.length; k++) {
                        cur.push(this.recipes[k]);
                    }
                    res.push(cur);
                    break;
                }
            }
            return res;
        }
    },
    components: { RecipePreview }
}
</script>
<style scoped>
.row{
    display: flex;
    justify-content: space-around;
}
.grid{width: 100%;}
</style>