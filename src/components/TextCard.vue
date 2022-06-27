<template>
  <div class="small-card">
    {{text}}
  </div>

</template>
<script>
export default{
  name:'TextCard',
 props:{
    text:{
        type:String,
        require:true
    }
 }
}
</script>

<style scoped>
.small-card{
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.156);;
  padding: 10px ;
  border-radius: 10px;

}
</style>