export const getToken = () => typeof window !== 'undefined' && window.localStorage.getItem('access_token');
