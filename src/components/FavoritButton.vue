<template>
    <div class="star" :style="{'font-size':this.size+'px'}">
        <v-btn @click="favorit" v-if="!isFavorit"> <b-icon-star></b-icon-star></v-btn>
        <v-btn @click="favorit" v-else> <b-icon-star-fill ></b-icon-star-fill></v-btn>
    </div>
</template>

<script>
  import api from '../services/api'
export default{
    name:'FavoritButton',
    mounted(){

    },
    props: {
        isFavorit: {
        type: Boolean,
        required: true
        },
        recipe: {
        type: Object,
        required: true
        },
        size: {
        type: Number,
        required: false
        },
    },
    methods:{
        favorit(){
            this.isFavorit =!this.isFavorit
            api.setFavorit({recipeId:this.recipe.id,markAs:this.isFavorit})
            
         
        },


    }
}

</script>
<style >
.star{
    color: rgb(187, 187, 0);
    cursor: pointer;
    pointer-events: all;
}

</style>