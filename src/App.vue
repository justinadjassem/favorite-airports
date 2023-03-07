<template>
 <div class="wrapper">
    <div v-for="airport in airports" :key="airport.abbreviation">
      <airport-card :airport="airport" />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
import AirportCard from "./components/airport-card/airport-card.vue";
export default Vue.extend({
 name: "App",
 components: {
  AirportCard
 },
 props: {

 },
 data(){
  return {
    airports : [
    {
      name: 'Cincinnati/Northern Kentucky International Airport',
      abbreviation: 'CVG',
      city: 'Hebron',
      state: 'KY'
    },
    {
      name: 'Seattle-Tacoma International Airport',
      abbreviation: 'SEA',
      city: 'Seattle',
      state: 'WA',
    },
    {
      name: 'Minneapolis-Saint Paul International Airport',
      abbreviation: 'MSP',
      city: 'Bloomington',
      state: 'MN',
    },
    {
      name: 'Louis Armstrong New Orleans International Airport',
      abbreviation: 'MSY',
      city: 'New Orleans',
      state: 'LA',
    },
    {
      name: `Chicago O'hare International Airport`,
      abbreviation: 'ORD',
      city: 'Chicago',
      state: 'IL',
    },
    {
      name: `Miami International Airport`,
      abbreviation: 'MIA',
      city: 'Miami',
      state: 'FL',
    }
    ]
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
