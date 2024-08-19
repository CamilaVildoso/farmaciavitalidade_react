
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://farmaciavitalidade-mf0x.onrender.com',
});

export default api;