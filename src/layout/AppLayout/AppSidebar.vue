<template>
	<div class="app-sidebar">
		<el-menu
			class="app-sidebar-menu"
			router
			:default-active="activeIndex"
			@select="handleSelect"
			:collapse="isCollapse"
			background-color="#545c64"
			text-color="#fff"
			active-text-color="#ffd04b">
			<!-- <el-submenu index="1">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span slot="title">导航一</span>
				</template>

				<el-submenu index="1-4">
					<span slot="title">选项4</span>
					<el-menu-item index="1-4-1">选项1</el-menu-item>
				</el-submenu>
			</el-submenu> -->
			<el-menu-item
				v-for="item in menus"
				:key="item.index"
				:index="item.index">
				<i :class="item.icon"></i>
				<template v-slot:title>
					<span>{{ item.title }}</span>
				</template>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
import { Menu, MenuItem, Submenu } from 'element-ui';
export default {
	name: 'AppSidebar',
	components: {
		'el-menu': Menu,
		// 'el-submenu': Submenu,
		'el-menu-item': MenuItem,
	},
	data() {
		return {
			activeIndex: '/app/article',
			isCollapse: false,
			menus: [
				{
					index: '/app/article',
					title: '文章管理',
					icon: 'el-icon-location',
				},
				{
					index: '/app/category',
					title: '文章分类',
					icon: 'el-icon-menu',
				},
			],
		};
	},
	watch: {
		$route(to) {
			this.activeIndex = to.path;
		},
	},
	methods: {
		handleSelect(d) {},
	},
};
</script>

<style lang="scss" scoped>
.app-sidebar {
	width: 200px;
	height: 100%;
}

.app-sidebar-menu {
	height: 100%;
	// background-color: $primary-color;
}
</style>
