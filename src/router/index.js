import Vue from 'vue';
import Router from 'vue-router';
import Index from '../pages/Index.vue';
import Landing from '../pages/Landing.vue';
import Login from '../pages/Login.vue';
import Profile from '../pages/Profile.vue';
import MainNavbar from '../layout/MainNavbar.vue';
import MainFooter from '../layout/MainFooter.vue';
import appRoutes from './app';
Vue.use(Router);

const router = new Router({
	linkExactActiveClass: 'active',
	routes: [
		{
			path: '/',
			name: 'index',
			components: {
				default: Index,
				header: MainNavbar,
				footer: MainFooter,
			},
			props: {
				header: { colorOnScroll: 400 },
				footer: { backgroundColor: 'black' },
			},
		},
		{
			path: '/landing',
			name: 'landing',
			components: {
				default: Landing,
				header: MainNavbar,
				footer: MainFooter,
			},
			props: {
				header: { colorOnScroll: 400 },
				footer: { backgroundColor: 'black' },
			},
		},
		{
			path: '/login',
			name: 'login',
			components: { default: Login, header: MainNavbar },
			props: {
				header: { colorOnScroll: 400 },
			},
		},
		{
			path: '/profile',
			name: 'profile',
			components: {
				default: Profile,
				header: MainNavbar,
				footer: MainFooter,
			},
			props: {
				header: { colorOnScroll: 400 },
				footer: { backgroundColor: 'black' },
			},
		},
		...appRoutes,
	],
	scrollBehavior: (to) => {
		if (to.hash) {
			return { selector: to.hash };
		} else {
			return { x: 0, y: 0 };
		}
	},
});

// 添加全局路由守卫
router.beforeEach((to, from, next) => {
	const isAuthenticated = localStorage.getItem('token');
	// 如果路由需要认证且用户未登录，重定向到登录页
	if (to.meta.auth && !isAuthenticated) {
		next('/login');
	} else {
		next();
	}
});

export default router;
