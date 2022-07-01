<template>
  <div class="container all myCard">
    <h1 class="title">About Page</h1>
    <div class="container all myCard">
      <span class="i-title" > The team: </span>
      <b-card-group deck class="mb-3">
        <TeamMember align="center" title="Harel Moshayof" summary="summary" image="https://www.foodisgood.co.il/wp-content/uploads/2017/09/teriyaki-salmon.jpg"/>
        <TeamMember align="center" title="Hadar Sabati" summary="summary" image="https://i.ibb.co/4FhjsDK/289476134-159585789915435-4080803343307331506-n.jpg"/>
      </b-card-group>
    </div>
    <div class="container all myCard">
      <span class="i-title" > Previous assignments: </span>
      <b-card-group deck class="mb-3">
        <b-card align="center">
          <b-badge pill variant="info">3.1</b-badge>
          <h4>API design</h4>
          <b-link href="#foo">    Link to gitHub</b-link>
        </b-card>
        <b-card align="center">
          <b-badge pill variant="info">3.2</b-badge>
          <h4>Backend</h4>
          <b-link href="#foo">    Link to gitHub</b-link>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
  import TeamMember from '../components/TeamMember.vue'
  export default{
    name:'About',
    components: {
        TeamMember
    },
    props:{
      
    }
  }
</script>

<style>
  .all{
    margin-top: 10px;
  }
  .myCard{
    box-shadow: 0px 1px 30px rgba(0, 0, 0, 0.061);
    padding: 20px;
    border-radius: 20px;
  }
  .i-title{
    font-size: 22px;
  }
  .small-card{
    margin-top: 10px;
      box-shadow: 0px 0px 4px rgba(0, 63, 126, 0.092);
    padding: 10px;
    width: 95%;
    border-radius: 10px;
  }
</style>