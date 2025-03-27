import axios from 'axios';

const request = axios.create({
	baseURL: 'api',
	timeout: 100 * 1000,
});

// 请求拦截器
request.interceptors.request.use(
	(config) => {
		console.log('request', config);
		if (!config.headers.noToken) {
			const token = localStorage.getItem('token');
			config.headers.authorization = token;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// 响应拦截器
request.interceptors.response.use(
	(response) => {
		const { code, data, msg } = response.data;
		if (code === 500) {
			return Promise.reject(msg);
		}

        if (code === 400) {
			return Promise.reject(msg);
		}

        if (code === 200) {
			return Promise.resolve(data);
        }

		return response;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default request;
