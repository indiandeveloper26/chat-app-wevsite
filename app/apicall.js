// component/api.js

import axios from 'axios';


// ✅ Axios instance banao
const api = axios.create({
    // baseURL: 'http://10.17.254.92:5000', // yahan apna base URL daal
    baseURL: 'https://socail-app-bakcend-v-2-2.onrender.com/', // yahan apna base URL daal

    // baseURL: 'https://firebase-chat-app-v-8-3.onrender.com', // yahan apna base URL daal
    timeout: 5000,
});

// ✅ Request interceptor: Har request mein token lagana hai to
// api.interceptors.request.use(
//   async (config) => {
//     const token = await AsyncStorage.getItem('token'); // ya 'tokenn' jo bhi rakha ho
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// ✅ Response interceptor: agar chaho to response mein kuch kar sakte ho
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // yahan 401 error handle, logout, refresh token wagaira kar sakte ho
        return Promise.reject(error);
    }
);

export default api;
