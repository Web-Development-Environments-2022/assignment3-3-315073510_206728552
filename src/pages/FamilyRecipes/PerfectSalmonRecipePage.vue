<template>
  <div class="container all myCard">
    <div>
      <div class="recipe-header mt-3 mb-4">
        <img src="https://www.foodisgood.co.il/wp-content/uploads/2017/09/teriyaki-salmon.jpg" class="img"  />
        <div id="header-details">
          <h1 id="title">Perfect Salmon</h1>
          <div class="txt">Usually made by: <span class="more_text">Hadar</span></div>
          <div class="txt">On Occasion: <span class="more_text">Friday dinners</span></div>
          <div class="txt">More about it: <span class="more_text">It's called perfect because it always gets out of the oven with the perfect smell, taste and texture</span></div>   
        </div>        
      </div>
      <div>        
        <span class="i-title" > Ingredients: </span> 
        <b-row class="justify-content-md-center">
            <b-col><FamilyRecipeIngredient 
                title="Salmon fillet"
                image="https://img.freepik.com/free-photo/fresh-salmon-fillet-with-basil-white-background_120872-2192.jpg?w=2000"
                amount="1 big / 6 small"
            /></b-col>
            <b-col><FamilyRecipeIngredient 
                title="Teriyaki Souce"
                image="https://nfarm.co.il/wp-content/uploads/2020/11/8858271004300.jpg"
                amount="3 spoons"
            /></b-col>
            <b-col><FamilyRecipeIngredient 
                title="Balsamic vinegar"
                image="https://tvuot.co.il/wp-content/uploads/2018/08/7290016995435-M.jpg"
                amount="2 spoons"
            /></b-col>
        </b-row>
        <br/>
        <b-row class="justify-content-md-center">
            <b-col><FamilyRecipeIngredient 
                title="Date honey"
                image="https://vavadoo.co.il/images/thumbs/0008030_532f9b81efe57a35b315077932719569jpg.jpeg"
                amount="2 spoons"
            /></b-col>
            <b-col><FamilyRecipeIngredient 
                title="Soy Souce"
                image="https://batevasheli.co.il/wp-content/uploads/2018/06/%D7%A8%D7%95%D7%98%D7%91-%D7%A1%D7%95%D7%99%D7%94-%D7%99%D7%90%D7%9E%D7%90%D7%A1%D7%94.png"
                amount="2-3 spoons"
            /></b-col>
        </b-row>
        <br/>
        <b-col>
          <span class="i-title">Instructions:</span>
          <div>
            <div class="small-card">Turn on the oven to 200 degrees</div>
            <div class="small-card">Mix all the ingredients but the salmon</div>
            <div class="small-card">Place the fillets on the oven tray 2 cm apart</div>
            <div class="small-card">Brush half of the souce on the salmon</div>
            <div class="small-card">Bake for 8-10 minutes</div>
            <div class="small-card">Take the salmon out of the oven and brush the other half of the souce</div>
            <div class="small-card">Bake again for 4-5 minutes on turbo mode</div>
            <div class="small-card">Check your salmon from time to time</div>
            <div class="small-card">Enjoy your Salmon!</div>
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
