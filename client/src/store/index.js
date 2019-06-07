import Vuex from "vuex";
import Vue from "vue";
import pandora from "./modules/pandora.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    pandora
  }
});
