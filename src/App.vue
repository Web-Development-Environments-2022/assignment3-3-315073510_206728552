<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
<b-navbar-brand href="#">ReciPacman</b-navbar-brand>  
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'main' }">Vue Recipes</b-nav-item>
          <b-nav-item :to="{ name: 'search' }" >Search</b-nav-item>
          <b-nav-item :to="{ name: 'about' }" >About</b-nav-item>
          <div v-if="!$root.store.username" style="display:flex">
          <b-nav-item :to="{ name: 'register' }" >Register</b-nav-item>
          <b-nav-item :to="{ name: 'login' }" >Login</b-nav-item>
          </div>
          <div v-else><b-nav-item @click="Logout" >Log Out</b-nav-item></div>
          
        </b-navbar-nav>
 
      </b-collapse>
      <b-navbar-nav>
         

          <div v-if="!$root.store.username"  class="ml-auto" style="display:flex">
           <span id="hello_g">Hello guest</span>
          </div>
         <span v-else style="display:flex">
          

         <b-nav-item-dropdown right>

          <template #button-content>
            <em>Personal</em>
          </template>
          <b-dropdown-item :to="{ name: 'favoritRecipes' }">Favorit Recipes</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'myRecipes' }">My Recipes</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'familyRecipes' }">My Family Recipes</b-dropdown-item>
        </b-nav-item-dropdown>
      <b-nav-item v-b-modal.addRecipe >+ Add New Recipe</b-nav-item>
        <span id="hello" >Hello </span>
            <span id="username" >{{$root.store.username}}</span>
            <b-icon-person-fill id="p-icon"></b-icon-person-fill>
            
         </span>

      </b-navbar-nav>

    </b-navbar>

    <router-view />
     <b-modal v-if="showModal" hide-footer size="xl" id="addRecipe" title="Add Recipe">
    <NewRecipeForm @close="closeModal"></NewRecipeForm>
  </b-modal>
  </div>
</template>

<script>
import NewRecipeForm from './components/NewRecipeForm.vue';
import api from './services/api'
export default {
    name: "App",
    data(){
      return{
        showModal:true
      }
    },
    methods: {
        Logout() {
            this.$root.store.logout();
            this.$root.toast("Logout", "User logged out successfully", "success");
            this.$router.push("/").catch(() => {
                this.$forceUpdate();
            });
        },
        closeModal( ){
           this.showModal=false
           setTimeout(() => {
            this.showModal=true
           }, 500);
           
        },
        async created(){
          this.favoritRecipes=await api.getFavoriteRecipes()
          this.myRecipes=await api.getMyRecipes()
        },
        data(){
          return{
            myRecipes:[],
            favoritRecipes:[]
          }
        }
    },
    components: {  NewRecipeForm }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;

}

#nav {
  padding: 30px;
}
#username{
  position: relative;
  top:9px;
  color: rgba(255, 234, 0, 0.622);
}
#hello{
  position: relative;
  top:9px;
  margin-right: 5px;
  margin-left: 10px;
  color: rgba(255, 255, 255, 0.622);
}
#hello_g{

  margin-right: 10px;
  color: rgba(255, 255, 255, 0.622);
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#p-icon{
  color: white;
  position: relative;
  top: 12px;
  margin-left: 10px;
}
#addRecipe{
  width: 100vw;
}
</style>
