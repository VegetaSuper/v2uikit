<template>
	<header class="app-header">
        <span class="toggle-icon" :class="icon" @click="toggleCollapse"></span>
		<!-- <el-button
			size="medium"
            icon="el-icon-s-fold"
            type="text"
			@click="toggleCollapse"
			></el-button
		> -->
	</header>
</template>

<script>
import { mapActions,mapGetters } from 'vuex';
export default {
	name: 'AppHeader',
    computed: {
		...mapGetters('app', ['isCollapse']),
        icon() {
			return this.isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold';
		},
	},
	methods: {
		...mapActions('app', ['toggleCollapse']),
	},
};
</script>

<style lang="scss" scoped>
.app-header {
	display: flex;
	align-items: center;
	padding: 0 20px;
	width: 100%;
	height: 60px;
	border-bottom: 1px solid #ddd;

    .toggle-icon {
        padding: 5px;
        font-size: 26px;
        cursor: pointer;
        border-radius: 2px;
        &:hover {
            background-color: #545c64;
            color: #ffd04b;
        }
    }
}
</style>
