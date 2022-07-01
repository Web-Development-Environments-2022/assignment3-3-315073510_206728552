<template>
  <div class="container all myCard">
    <div>
      <div class="recipe-header mt-3 mb-4">
        <img src="https://myglida.co.il/wp-content/uploads/2018/03/35202020-36-Smores-Ice-Cream-5.jpg" class="img"  />
        <div id="header-details">
          <h1 id="title">Easy Ice Cream</h1>
          <div class="txt">Usually made by: <span class="more_text">Carmela - Hadar's mom</span></div>
          <div class="txt">On Occasion: <span class="more_text">Every time we want ice cream!</span></div>
          <div class="txt">More about it: <span class="more_text">We like to experiment with different flavours like honey, Oreo, peanut butter and more. just be creative!</span></div>   
        </div>        
      </div>
      <div>        
        <span class="i-title" > Ingredients: </span> 
        <b-row class="justify-content-md-center">
          <b-col><FamilyRecipeIngredient 
            title="Condensed Milk"
            image="https://d3m9l0v76dty0.cloudfront.net/system/photos/7603679/large/9a728259444540062b3e7018b68a6977.jpg"
            amount="1 can"
          /></b-col>
          <b-col><FamilyRecipeIngredient 
            title="Whipping Cream"
            image="https://www.tnuva.co.il/uploads/f_5dd168e7bcf4b_1574004967.jpg"
            amount="500 ml"
          /></b-col>
          <b-col><FamilyRecipeIngredient 
            title="Espresso"
            image="https://www.nespresso.com/il/en/media/catalog/product/2/8/284-26_483x350.png"
            amount="1 small glass"
          /></b-col>
        </b-row>
        <br/>
        <b-col>
          <span class="i-title">Instructions:</span>
          <div>
            <div class="small-card">Mix the cream in a mixer</div>
            <div class="small-card">Add condensed milk and mix a little bit</div>
            <div class="small-card">Add your desired flavour- we recommend a cup of esspreso!</div>
            <div class="small-card">Freeze for 4 hours or overnight</div>
            <div class="small-card">Enjoy your Ice Cream!</div>
          </div>
        </b-col>
      </div>
    </div>
  </div>
</template>

<script>
  import FamilyRecipeIngredient from '../../components/FamilyRecipeIngredient.vue'
  export default {
      components: {FamilyRecipeIngredient}
  };
</script>

<style>
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
  .i-title{
    font-size: 22px;
  }
  .all{
    margin-top: 10px;
  }
  .myCard{
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
  .more_text{
    color: rgb(70, 144, 209);
  }
  .txt{
    font-size: 14px;
  }
  .recipe-body{
    display: flex;
    justify-content: center;
  }
</style>
