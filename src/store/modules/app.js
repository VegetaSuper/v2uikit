const app = {
	namespaced: true, //开通命名空间
	state: {
		isCollapse: false,
	},
	getters: {
		isCollapse: (state) => state.isCollapse,
	},
	mutations: {
		SET_IS_COLLAPSE(state, value) {
			state.isCollapse = value;
		},
	},
	actions: {
		toggleCollapse({ commit, state }) {
			commit('SET_IS_COLLAPSE', !state.isCollapse);
		},
	},
};
export default app;
