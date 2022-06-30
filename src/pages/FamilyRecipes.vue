<template>
  <div class="container">
    <h1 class="title">Family Recipes Page</h1>
    <br/>
    <b-card-group deck>
      <FamilyRecipePreview title="Easy Ice Cream" summary="yes, you can make ice cream at home!" image="https://myglida.co.il/wp-content/uploads/2018/03/35202020-36-Smores-Ice-Cream-5.jpg" route="Ice Cream Recipe Page"/>
      <FamilyRecipePreview title="The perfect Salmon" summary="Perfect texture every time" image="https://www.foodisgood.co.il/wp-content/uploads/2017/09/teriyaki-salmon.jpg" route="Salmon Recipe Page"/>
      <FamilyRecipePreview title="Suflonim" summary="They are so cute and sweet!" image="https://img.jamieoliver.com/home/wp-content/uploads/2017/11/fondant630x420.jpg" route="Suflonim Recipe Page"/>
  </b-card-group>
  </div>
</template>

<script>
    import FamilyRecipePreview from '../components/FamilyRecipePreview.vue'
    export default{
      name:'FamilyRecipes',
      components: {
        FamilyRecipePreview
      },
    }

// familyRecipe:{
//   "title":
//   "summary"
//   "image":
//   "whoMakes":
//   "whenMakes":
//   "ingredients":
//   "servings":
//   "instructions": [{text, image}]
// }
</script>



