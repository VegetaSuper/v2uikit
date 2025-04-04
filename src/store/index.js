import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import app from './modules/app';


const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	getters: {},
	modules: { app },
	strict: debug,
});
