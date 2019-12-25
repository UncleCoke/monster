import Vue from 'vue'
import Vuex from 'vuex'
import {_getSessionStore, _setSessionStore} from "../common/js/storage";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: '123'
    },
    mutations: {
        setToken: (state, token) => {
            _setSessionStore('token',state.token);
            state.token = token;
        }
    },
    actions: {
        setToken: ({commit}, token) => {
            commit('setToken', token);
        }
    },
    getters: {
        token: state => {
            return state.token
        }
    },
    modules: {}
})
