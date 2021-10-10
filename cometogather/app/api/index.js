
import axios from 'react-native-axios';

const url='http://10.193.19.5:4000/api/';

const api = axios.create({
  baseURL: url,
});

export default api;