<template>
    <b-card bg-variant="info" text-variant="white" class="text-center"
        no-body
        style="max-width: 20rem;"
        :img-src="image"
        img-alt="Image"
        img-top
        align="center"
    >
        <b-card-body>
          <b-card-title>{{title}}</b-card-title>
          <b-card-text>
              {{summary}}
          </b-card-text>
        </b-card-body>
    </b-card>
</template>

<script>
export default {
    name: "TeamMember",
    props: {
        title: String,
        summary: String,
        image: String,
        //route: String,    
    },

};
</script>

<style >

</style>
