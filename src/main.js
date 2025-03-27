import Vue from 'vue';
import App from './App.vue';
import router from './router';
import NowUiKit from './plugins/now-ui-kit';
import store from './store';
Vue.config.productionTip = false;

Vue.use(NowUiKit);

new Vue({
    router,
	store,
	render: (h) => h(App),
}).$mount('#app');
