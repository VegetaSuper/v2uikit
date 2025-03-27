import AppLayout from '@/layout/AppLayout';

const appRoutes = [
	{
		path: '/app',
		component: AppLayout,
		redirect: '/app/article',
		children: [
			{
				path: '/app/article',
				name: 'Article',
				meta: {
					auth: true,
					title: '文章管理',
				},
				component: () => import('@/views/Article.vue'),
			},
            {
				path: '/app/category',
				name: 'Category',
				meta: {
					auth: true,
					title: '文章分类',
				},
				component: () => import('@/views/Category.vue'),
			},
		],
	},
];

export default appRoutes;
