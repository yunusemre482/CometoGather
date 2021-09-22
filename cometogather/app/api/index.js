
import axios from 'react-native-axios';

const url='http://10.193.19.5:3000/api/';

const api = axios.create({
  baseURL: url,
});

export default api;