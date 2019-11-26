/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex);
//Module
import users from './modules/user'
import news from './modules/news'
import aoc_name from './modules/aoc-name'
import aoc from './modules/aoc'
import video from './modules/video'
import gallery from './modules/gallery'
import about from './modules/about'
export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    modules: {
        users,
        news,
        aoc_name,
        aoc,
        video,
        gallery,
        about,
    }
})
