<template>
    <div class="airport" @click="addToFavorite(airport)">
     <p>{{ airport.abbreviation }}</p>
     <p>{{ airport.name }}</p>
     <p>{{ airport.city }}, {{ airport.state }}</p>
   </div>
 </template>
 <script lang="ts">
 import { airport } from "@/models/airports";
import { Vue } from "vue-property-decorator";
import { mapActions } from "vuex";
 
 export default Vue.extend({
   name: "AirportCard",
   components: {
   },
   props: {
     airport: {
       type: Object,
       required: true
     }
   },
   methods:{
    ...mapActions("airport", ["setFavorite"]),
    addToFavorite(theFavorite: airport){
    this.setFavorite(theFavorite )
    console.log(theFavorite)
    },

   }
 
 })
 </script>
 <style lang="scss" src="./airport-card.scss" scoped/>
