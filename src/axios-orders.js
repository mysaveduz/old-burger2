import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-uz.firebaseio.com/'
});

export default instance;
