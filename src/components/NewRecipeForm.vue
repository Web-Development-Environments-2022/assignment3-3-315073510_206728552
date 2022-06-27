<template>
<div  id="container">
     <b-form @submit.prevent="addRecipe">
        <b-form-group
          id="r-name"
          label-cols-sm="3"
          label="Recipe name*:"
          label-for="name"
        >
          <b-form-input
            id="name-input"
            v-model="form.title"
            type="text"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="pTime"
          label-cols-sm="3"
          label="Preperation time*:"
        >
          <b-form-input
            id="ptime-input"
            v-model="form.readyInMinutes"
            type="text"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="img"
          label-cols-sm="3"
          label="Photo URL*:"
        >
          <b-form-input
            id="img-input"
            v-model="form.image"
            type="text"
          ></b-form-input>
        </b-form-group>
        <div id="cb-part">
            <div id="checkbox-group">
                    <b-form-checkbox
                    id="vegan"
                    v-model="form.isVegan"
                    >
                    Vegan
                    </b-form-checkbox>
                    <b-form-checkbox
                    id="vegetarian"
                    v-model="form.isVegetarian"
                    >
                    Vegetarian
                    </b-form-checkbox>
                     <b-form-checkbox
                    id="glutenFree"
                    v-model="form.isGlutenFree"
                    >
                    Gluten Free
                    </b-form-checkbox>
            </div>
        </div>
        
        <div id="lists">
            <div>
                <h5>Ingredients*</h5>
                <div><TextCard class="ing-card" :text="ing" v-for="(ing,i) in form.ingredients" :key="i"></TextCard></div>
                <div class="mid-ing" v-if="!displayNewIng">
                    <b-button pill id="ing-plus" variant="accent" @click="addIng">+ Add </b-button>
                </div>
                <div v-if="displayNewIng" id="new-ing-form">
                    <b-form-group
                        id="new-ing"
                        >
                        <b-form-textarea
                            class="new-input"
                            placeholder="Enter new ingredient"
                            v-model="newIngTxt"
                            type="text"
                        ></b-form-textarea>
                    </b-form-group>
                    <div class="mid-ing">
                        <b-button pill class="margin" variant="accent" @click="backIng">Back </b-button>
                        <b-button pill  variant="accent" @click="submitIng">Submit ingredient </b-button>
                    </div>
                </div>
            </div>
             <div>
                    <h5>Instructions*</h5>
                    <div><TextCard class="ing-card" :text="ins" v-for="(ins,i) in form.instructions" :key="i"></TextCard></div>
                    <div class="mid-ing" v-if="!displayNewIns">
                        <b-button pill id="ing-plus" variant="accent" @click="addIns">+ Add </b-button>
                    </div>
                    <div v-if="displayNewIns" id="new-ins-form">
                    
                        <b-form-group
                            id="new-ins"
                            >
                            <b-form-textarea
                                class="new-input"
                                placeholder="Enter new instruction"
                                v-model="newInsTxt"
                                type="text"
                            ></b-form-textarea>
                        </b-form-group>
                        <div class="mid-ing">
                            <b-button pill class="margin" variant="accent" @click="backIns">Back </b-button>
                            <b-button pill  variant="accent" @click="submitIns">Submit instruction </b-button>
                        </div>
                    </div>
                </div>
               
        </div>
         <div id="summary-div">
                     <b-form-textarea
                                id="summary"
                                placeholder="Add a description"
                                v-model="form.summary"
                                type="text"
                            ></b-form-textarea>
                </div>
        <div class="mid">
                <b-button
                    type="submit"
   
                        id="add-r-btn"
                        class="mx-auto w-100"
                >Add Recipe</b-button>
        </div>
        <div class="mid">
            <span id="error-msg" v-if="showErrorMsg">{{errorMsgTxt}}</span>
        </div>
        
      </b-form>
</div>
</template>

<script>
import api from '../services/api';
import TextCard from './TextCard.vue';
export default{
    name: "NewRecipeForm",
    methods: {
        async addRecipe() {
            if(!this.form.title.length){
                this.errorMsgTxt='Recipe name field is requierd'
                this.showErrorMsg=true
                return
            }
             if(!this.form.readyInMinutes.length){
                this.errorMsgTxt='Preperation time field is requierd'
                this.showErrorMsg=true
                return
            }
             if(!this.form.image.length){
                this.errorMsgTxt='Image field is requierd'
                this.showErrorMsg=true
                return
            }
            if(!this.form.ingredients.length){
                this.errorMsgTxt='There should be at least 1 ingredients'
                this.showErrorMsg=true
                return
            }
            if(!this.form.instructions.length){
                this.errorMsgTxt='There should be at least 1 instruction'
                this.showErrorMsg=true
                return
            }
            this.showErrorMsg=false
            const res = await api.addRecipe(this.form)
            if(res=='OK'){
                alert('Recipe added successfuly')
                this.$emit('close');
            }
            else{
                alert('There was a problem with adding the recipe')
            }
            
        },
        addIng(){
            this.displayNewIng=true;

        },
        addIns(){
            this.displayNewIns=true;
        },
        submitIng(){
            this.displayNewIng=false;
            if(this.newIngTxt!=''){
                this.form.ingredients.push(this.newIngTxt)
            }
            this.newIngTxt=''
        },
        submitIns(){
            this.displayNewIns=false;
            if(this.newInsTxt!=''){
                this.form.instructions.push(this.newInsTxt)
            }
            this.newInsTxt=''
        },
        backIng(){
            this.displayNewIng=false;
            this.newIngTxt=''
        },
        backIns(){
            this.displayNewIns=false;
            this.newInsTxt=''
        },
       
    },
    data() {
        return {
            displayNewIng:false,
            displayNewIns:false,
            showErrorMsg:false,
            errorMsgTxt:'',
            newIngTxt:'',
            newInsTxt:'',
            form: {
                title: "",
                readyInMinutes: "",
                aggregateLikes :0,
                popularity:0,
                image: "",
                vegan: false,
                vegetarian: false,
                glutenFree: false,
                summary: "",
                ingredients:[],
                instructions:[]
            }
        };
    },
    components: { TextCard }
}
</script>


<style>
.small-card{
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.179);;
  padding: 10px ;
  border-radius: 10px;

}
.ing-card{
    width: 400px;
    min-height: 50px;
    margin-top: 10px;
}
#ing-plus{
    margin-top: 10px;   
}
.mid-ing{
    text-align: center;
   width: 400px;
}
.mid{
    text-align: center;
}
.new-input{

    min-height: 50px;
    margin-top: 10px; 
}
.margin{
    margin: 10px;
}
#lists{
    display: flex;
    justify-content: space-between;
    padding: 20px;
}
#container{
    margin-top: 30px;
}
#add-r-btn{
    max-width: 300px;
    background-color:darkcyan;
    margin-top: 20px;
}
#summary{
    width: 60vw;
    height: 14vh;
}
#summary-div{
    display: flex;
    justify-content: center;
}
#checkbox-group{
    display: flex;
    width: 320px;
    justify-content: space-between;
}
#cb-part{
    display: flex;
    justify-content: end;
    width: 100%;
}
#error-msg{
    color:red
}
</style>