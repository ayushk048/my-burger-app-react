import Axios from 'axios'

const instance = Axios.create({
    baseURL: "https://react-my-burger-b2c5d.firebaseio.com/"
    // baseURL: "http://localhost:5000/api/"

});

export default instance;