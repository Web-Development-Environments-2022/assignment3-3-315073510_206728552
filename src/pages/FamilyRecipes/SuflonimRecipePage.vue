<template>
  <div class="container all myCard">
    <div>
      <div class="recipe-header mt-3 mb-4">
        <img src="https://img.jamieoliver.com/home/wp-content/uploads/2017/11/fondant630x420.jpg" class="img"  />
        <div id="header-details">
          <h1 id="title">Suflonim</h1>
          <div class="txt">Usually made by: <span class="more_text">Hadar</span></div>
          <div class="txt">On Occasion: <span class="more_text">Whenever we need easy desert</span></div>
          <div class="txt">More about it: <span class="more_text">Very easy and quick chocolate fondants, we call them "Suflpnim" because it's like mini suoffle!</span></div>   
        </div>        
      </div>
      <div>        
        <span class="i-title" > Ingredients: </span> 
        <b-row class="justify-content-md-center">
            <b-col><FamilyRecipeIngredient 
                title="Dark Chocolate"
                image="https://m.pricez.co.il/ProductPictures/7290000178134.jpg"
                amount="200 gr"
            /></b-col>
            <b-col><FamilyRecipeIngredient 
                title="White sugar"
                image="https://d3m9l0v76dty0.cloudfront.net/system/photos/3069462/large/3c62846b6705c61e1f0add31813e26a1.jpg"
                amount="1/2 cup"
            /></b-col>
            <b-col><FamilyRecipeIngredient 
                title="Flour"
                image="https://m.pricez.co.il/ProductPictures/7290003107216.jpg"
                amount="1/4 cup"
            /></b-col>
        </b-row>
        <br/>
        <b-row class="justify-content-md-center">
            <b-col><FamilyRecipeIngredient 
                title="Butter"
                image="https://d3m9l0v76dty0.cloudfront.net/system/photos/4084584/large/97ea0c1852f7d6ca3bcdf08abbfc8fa1.jpg"
                amount="150 gr"
            /></b-col>
            <b-col><FamilyRecipeIngredient 
                title="Eggs"
                image="https://market50.b-cdn.net/shemesh/products/30-%D7%91%D7%99%D7%A6%D7%99%D7%9D-L-479114158.jpg"
                amount="2 units"
            /></b-col>
            <b-col><FamilyRecipeIngredient 
                title="Egg yolks"
                image="https://media.istockphoto.com/photos/broken-double-yolk-egg-picture-id637331752?k=20&m=637331752&s=612x612&w=0&h=QUKj-zskxoSM0s4pZuqx7x2uYrHrbOqLwLkgpuxezbM="
                amount="2 units"
            /></b-col>
        </b-row>
        <br/>
        <b-col>
          <span class="i-title">Instructions</span>
          <div>
            <div class="small-card">Turn on the oven to 180 degrees</div>
            <div class="small-card">Melt in a bowl 150 gr of chocolate and the butter</div>
            <div class="small-card">Add the eggs, egg yolks and sugar to the bowl, and mix</div>
            <div class="small-card">Add the flour and mix a little bit</div>
            <div class="small-card">Put the mixture evenly in cupcake cups</div>
            <div class="small-card">Put a cube of chocolate inside each one</div>
            <div class="small-card">Bake for 9 minutes</div>
            <div class="small-card">Enjoy your Suflonim!</div>
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
