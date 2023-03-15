import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import  { RootState } from './types'
import { airport } from "./modules/airport";
Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0'
  },
  modules: {
    airport: airport 

  },

  getters: {},
  mutations: {},
  devtools: false
}

export default new Vuex.Store<RootState>(store)