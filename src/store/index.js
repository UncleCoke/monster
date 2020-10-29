import Vue from 'vue'
import Vuex from 'vuex'
import themeModule from './modules/theme'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    theme:themeModule
  },
  plugins: debug ? [createLogger()] : []
})
