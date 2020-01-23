import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-fac7e.firebaseio.com/'

});

export default instance;