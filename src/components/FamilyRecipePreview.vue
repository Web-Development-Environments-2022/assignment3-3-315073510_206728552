<template>
    <router-link   
        :to="{ name: this.route }"
    >
        <b-card bg-variant="info" text-variant="white" class="text-center"
            no-body
            style="max-width: 20rem;"
            :img-src="image"
            img-alt="Image"
            img-top
        >
            <b-card-body>
            <b-card-title>{{title}}</b-card-title>
            <b-card-text>
                {{summary}}
            </b-card-text>
            <b-card-sub-title class="mb-2">click for more info</b-card-sub-title>
            </b-card-body>
        </b-card>
    </router-link>
</template>

<script>
export default {
    props: {
        title: String,
        summary: String,
        image: String,
        route: String,    
    },

};
</script>

<style >

</style>
