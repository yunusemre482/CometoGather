
import axios from 'react-native-axios';

const url='http://10.225.166.113:4000/api/';

const api = axios.create({
  baseURL: url,
});

export default api;