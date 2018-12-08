import Vue from 'vue'
import Vuex from 'vuex'
import { State, createVuexStore } from 'vuex-simple'

Vue.use(Vuex)

export class MainStore {
  @State()
  public version = '2.0.0'
}
const instance = new MainStore()
export default createVuexStore(instance, {
  strict: false,
  modules: {},
  plugins: []
})

