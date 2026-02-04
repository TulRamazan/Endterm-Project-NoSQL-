import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const fetchListings = () => API.get('/listings');
export const fetchListingDetails = (id) => API.get(`/listings/${id}`);
export const createOrder = (orderData) => API.post('/orders', orderData);
export const getAnalytics = () => API.get('/analytics/stats');
