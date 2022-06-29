import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";
import api from './services/api'
const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/recipe/:recipeId",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "/myRecipes",
    name: "myRecipes",
    component: () => import("./pages/MyRecipes"),
  },
  {
    path: "/familyRecipes",
    name: "familyRecipes",
    component: () => import("./pages/FamilyRecipes"),
  },
  {
    path: "/favoritRecipes",
    name: "favoritRecipes",
    component: () => import("./pages/FavoritRecipes"),

  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/About"),
    
  },
  // {
  //   path: "/newRecipe",
  //   name: "newRecipe",
  //   component: () => import("./pages/AddNewRecipe"),
  // },
  {
    path: "/iceCream",
    name: "Ice Cream Recipe Page",
    component: () => import("./pages/FamilyRecipes/EasyIceCreamRecipePage"),
    
  },
  {
    path: "/salmon",
    name: "Salmon Recipe Page",
    component: () => import("./pages/FamilyRecipes/PerfectSalmonRecipePage"),
    
  },
  {
    path: "/suflonim",
    name: "Suflonim Recipe Page",
    component: () => import("./pages/FamilyRecipes/SuflonimRecipePage"),
    
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
];

export default routes;
