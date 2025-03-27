import axios from 'axios';
import request from '@/utils/request';

const headers = {
	headers: {
		noToken: true,
	},
};

// 获取租户信息
export function getTenantIdByCode(code) {
	return request.get('/system/tenant/get-id-by', { code }, headers);
}

// 刷新token
export function refreshToken() {
	const refreshToken = localStorage.getItem('refreshToken');
	return request.post(
		'/system/auth/refresh-token',
		{ refreshToken },
		headers
	);
}

// 登录
export function login(data) {
	return request.post('/system/auth/login', data, headers);
}

// 退出登录
export function logout() {
	return request.post('/system/auth/logout', {}, headers);
}

// 验证码
export function getCaptcha(captchaType) {
	return request.post(`/system/captcha/get`, { captchaType }, headers);
}
