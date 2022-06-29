<template>
  <div class="container">
    <h1 class="title">Search a Recipe:</h1>
    <br/>
    <b-form @submit="searchRecipes" v-if="show">
      <b-form-group id="input-group-1" label-for="input-1" >
        <b-form-input
          id="input-1"
          v-model="form.query"
          placeholder='Enter search keywords (like "pasta")'
          required
        ></b-form-input>
      </b-form-group>
      <div v-if="$root.store.last_searched">
          <p>last search: {{$root.store.last_searched}}</p>
      </div>
      <div v-else>
          <p>no last searches for this user</p>
      </div>
      

      <br/>
      <b-row>
        <b-col>
          <b-form-group label-for="tags-component-select" id="tags-component-select-diet">
            <!-- Prop `add-on-change` is needed to enable adding tags vie the `change` event -->
            <b-form-tags
                id="tags-component-select"
                v-model="form.diets"
                size="lg"
                class="mb-2"
                add-on-change
                no-outer-focus
            >
              <template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
                  <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
                      <li v-for="tag in tags" :key="tag" class="list-inline-item">
                          <b-form-tag
                              @remove="removeTag(tag)"
                              :title="tag"
                              :disabled="disabled"
                              variant="info"
                          >{{ tag }}</b-form-tag>
                      </li>
                  </ul>
                  <b-form-select
                      v-bind="inputAttrs"
                      v-on="inputHandlers"
                      :disabled="disabled || optionsDiets.length === 0"
                      :options="optionsDiets"
                  >
                    <template #first>
                        <!-- This is required to prevent bugs with Safari -->
                        <option disabled value="">Diets</option>
                    </template>
                  </b-form-select>
              </template>
            </b-form-tags>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label-for="tags-component-select" id="tags-component-select-diet">
            <!-- Prop `add-on-change` is needed to enable adding tags vie the `change` event -->
            <b-form-tags
                id="tags-component-select"
                v-model="form.intolerances"
                size="lg"
                class="mb-2"
                add-on-change
                no-outer-focus
            >
              <template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
                  <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
                      <li v-for="tag in tags" :key="tag" class="list-inline-item">
                          <b-form-tag
                              @remove="removeTag(tag)"
                              :title="tag"
                              :disabled="disabled"
                              variant="info"
                          >{{ tag }}</b-form-tag>
                      </li>
                  </ul>
                  <b-form-select
                      v-bind="inputAttrs"
                      v-on="inputHandlers"
                      :disabled="disabled || optionsIntolerances.length === 0"
                      :options="optionsIntolerances"
                  >
                    <template #first>
                        <!-- This is required to prevent bugs with Safari -->
                        <option disabled value="">intolerances</option>
                    </template>
                  </b-form-select>
              </template>
            </b-form-tags>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label-for="tags-component-select" id="tags-component-select-diet">
            <!-- Prop `add-on-change` is needed to enable adding tags vie the `change` event -->
            <b-form-tags
                id="tags-component-select"
                v-model="form.cuisines"
                size="lg"
                class="mb-2"
                add-on-change
                no-outer-focus
            >
              <template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
                  <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
                      <li v-for="tag in tags" :key="tag" class="list-inline-item">
                          <b-form-tag
                              @remove="removeTag(tag)"
                              :title="tag"
                              :disabled="disabled"
                              variant="info"
                          >{{ tag }}</b-form-tag>
                      </li>
                  </ul>
                  <b-form-select
                      v-bind="inputAttrs"
                      v-on="inputHandlers"
                      :disabled="disabled || optionsCuisines.length === 0"
                      :options="optionsCuisines"
                  >
                    <template #first>
                        <!-- This is required to prevent bugs with Safari -->
                        <option disabled value="">Cuisines</option>
                    </template>
                  </b-form-select>
              </template>
            </b-form-tags>
          </b-form-group>
        </b-col>
      </b-row>
      
      <br/>
      <b-row>
        <b-col cols="2"><h4>Sort by:</h4></b-col>
        <b-col cols="4"><b-form-select v-model="form.selectedSort" :options="optionsSort" required></b-form-select></b-col>
        <b-col cols="3"><h4>number of results:</h4></b-col>
        <b-col cols="3"><b-form-select v-model="form.selectedNumResults" :options="optionsNumResults" required></b-form-select></b-col>
      </b-row>
      
      <br/>
      <br/>
      <b-button block pill type="submit"  variant="info">Search</b-button>  
    </b-form>  
    <br/>
    <hr/>
    <br/>
    <RecipesGrid :recipes="recipesToShow" :watched="lastWatched" :favorits="favoritRecipes" title="Results:"  />

  </div>
</template>

<script>
import SearchResults from '../components/SearchResults.vue';
import RecipesGrid from '../components/RecipesGrid.vue';
import api from '../services/api';

export default {
  name: "SearchPage",
  components: {
    RecipesGrid
  },
  props: {
  },

  data() {
    return {
      form: {
        query: '',
        diets: [],
        intolerances: [],
        cuisines: [],
        selectedSort: 'random',
        selectedNumResults: 5,
      },

      show: true,
      lastWatched: [],
      favoritRecipes: [],
      recipesToShow: [],
      
      optionsDiets: ['Gluten Free', 'Ketogenic', 'Vegetarian', 'Lacto-Vegetarian', 'Ovo-Vegetarian', 'Vegan', 'Pescetarian', 'Paleo', 'Primal', 'Low FODMAP', 'Whole30'],
      optionsIntolerances: ['Dairy', 'Egg', 'Gluten', 'Grain', 'Peanut', 'Seafood', 'Sesame', 'Shellfish', 'Soy', 'Sulfite', 'Tree Nut', 'Wheat'],
      optionsCuisines: ['African', 'American', 'British', 'Cajun', 'Caribbean', 'Chinese', 'Eastern European', 'European', 'French', 'German', 'Greek', 'Irish', 'Italian', 'Japanese', 'Jewish', 'Korean', 'Latin American', 'Mediterranean', 'Mexican', 'Middle Eastern', 'Nordic', 'Southern', 'Spanish', 'Thai', 'Vietnamese'],
      optionsSort: [
        { value: 'random', text: 'Random' },
        { value: 'popularity', text: 'Popularity' },
        { value: 'time', text: 'Cooking time' },
        { value: 'healthiness', text: 'Healthiness' },
        { value: 'calories', text: 'Calories'}
      ],
      optionsNumResults: [
        { value: 5, text: '5' },
        { value: 10, text: '10' },
        { value: 15, text: '15' },
      ],
    }
  },

  methods: {
    async searchRecipes(event) {
      event.preventDefault()
      console.log("!!!!")
      const dietsPicked = [];
      const CuisinesPicked = [];
      const IntolerancesPicked = [];

      for(var i in this.form.diets)
        dietsPicked.push([this.form.diets[i]]);

      for(var i in this.form.cuisines)
        CuisinesPicked.push([this.form.cuisines[i]]);

      for(var i in this.form.intolerances)
        IntolerancesPicked.push([this.form.intolerances[i]]);

      this.$root.store.search(this.form.query);
      

      const res = await api.searchRecipes(this.form.query, this.form.selectedNumResults, dietsPicked, CuisinesPicked, IntolerancesPicked, this.form.selectedSort)
      if(res){
          //console.log(res.data[0].id)
          //alert(res.data[0].id)
          this.recipesToShow = res.data
          this.onReset();
      }
      else{
          alert('There was a problem with searching resipes, try again')
      }


    },

    newRandoms(){
      api.getRandomRecipes(3).then(r=>this.randomRecipes=r)  
    },
    onReset() {
        //event.preventDefault()
        // Reset our form values
        this.form.query= '',
        this.form.diets= [],
        this.form.intolerances= [],
        this.form.cuisines= [],
        this.form.selectedSort= 'random',
        this.form.selectedNumResults= 5,
        //recipesToShow = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
  },

  async created(){
    //we need to know which recipes the user visited so we can display the watched icon
    this.lastWatched= await api.getWatched()
    //we need to know which recipes the user favorits so we can display the filled star icon
    this.favoritRecipes=await api.getFavoriteRecipes()
  },


}
</script>

<style>

</style>
