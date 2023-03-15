<template>
 <div class="wrapper">
    <div v-for="airport in airports" :key="airport.abbreviation">
      <airport-card :airport="airport" @click="addToFavorite(airport)"/>
    </div>
    <h2 v-if="isFavorite()">Favorites</h2>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
import AirportCard from "./components/airport-card/airport-card.vue";
import { allAirports } from "./data/airports";
import { mapActions,mapGetters } from "vuex";
import { airport } from "./models/airports";
export default Vue.extend({
 name: "App",
 components: {
  AirportCard
 },
 props: {

 },
 data(){
  return {
    airports: allAirports,
  }
 },
 computed: {
  ...mapGetters("airport", ["getFavorite"])
},
 methods:{
  ...mapActions("airport", ["setFavorite"]),
  addToFavorite(theFavorite: airport){
    this.setFavorite(theFavorite )
    console.log(theFavorite)
  },
  isFavorite(){
      if( this.getFavorite?.length){
        return true
      }
    }
}

})
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  max-width: 960px;
  margin: 0 auto;
}

p,
h3 {
  grid-column: span 3;
}
</style>
