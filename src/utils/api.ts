import { getToken } from './auth';

export async function fetchWithAuth(url: string, options: RequestInit = {}) {
  const token = getToken();
  
  const headers = new Headers(options.headers);
  headers.set('Content-Type', 'application/json');

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (response.status === 401) {
    // token 无效或过期，重定向到登录页面
    window.location.href = '/admin/login';
    return;
  }

  return response;
} 
export async function uploadWithAuth(url: string, options: RequestInit = {}) {
  const token = getToken();
  
  const headers = new Headers(options.headers);

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (response.status === 401) {
    // token 无效或过期，重定向到登录页面
    window.location.href = '/admin/login';
    return;
  }

  return response;
} 
