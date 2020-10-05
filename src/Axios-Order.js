import Axios from 'axios'

const instance = Axios.create({
    baseURL: "https://react-my-burger-b2c5d.firebaseio.com/"
});

export default instance;