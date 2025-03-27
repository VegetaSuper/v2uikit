<template>
	<div class="app-layout">
		<app-sidebar></app-sidebar>
		<main class="app-main">
			<app-header></app-header>
			<div class="app-content">
				<keep-alive>
					<transition name="el-fade-in-linear">
						<router-view />
					</transition>
				</keep-alive>
			</div>
		</main>
	</div>
</template>

<script>
import AppHeader from './AppHeader.vue';
import AppSidebar from './AppSidebar.vue';

export default {
	name: 'AppLayout',
	components: {
		'app-header': AppHeader,
		'app-sidebar': AppSidebar,
	},
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.app-layout {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
}

.app-main {
	flex: 1;
	display: flex;
	flex-direction: column;

	.app-content {
		flex: 1;
		overflow: auto;
	}
}
</style>
