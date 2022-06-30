<template>
  <div align='center'>
    <b-card
      no-body
      style="max-width: 20rem;"
    >
      <img align='center' :src="image" class="img1"/>
      <b-card-title>{{title}}</b-card-title>
      <b-card-sub-title class="mb-2">{{amount}}</b-card-sub-title>
    </b-card>
  </div>
</template>

<script>
  export default {
    name: "FamilyRecipeIngredient",
    props: {
        title: String,
        image: String,
        amount: String
    } 
};
</script>

<style>
  .img1{
    width: 15rem;
    height: 12rem;
    border-radius: 10px;
    margin: 10px;
  }
  .centrt{
    align: 'center';
  }
</style>
