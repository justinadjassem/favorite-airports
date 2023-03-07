<template>
    <div class="airport">
     <p>{{ airport.abbreviation }}</p>
     <p>{{ airport.name }}</p>
     <p>{{ airport.city }}, {{ airport.state }}</p>
   </div>
 </template>
 <script lang="ts">
 import { Vue } from "vue-property-decorator";
 
 export default Vue.extend({
   name: "AirportCard",
   components: {
   },
   props: {
     airport: {
       type: Object,
       required: true
     }
   }
 
 })
 </script>
 <style lang="scss" src="./airport-card.scss" scoped/>
