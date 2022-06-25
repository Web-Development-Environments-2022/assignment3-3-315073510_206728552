<template>
    <div class="star" :style="{'font-size':this.size+'px'}">
        <b-icon-star  v-if="!isFavorit" @click="favorit"></b-icon-star>
        <b-icon-star-fill v-else></b-icon-star-fill>
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
            api.setFavorit(this.recipe.id)
            this.isFavorit=true
         
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