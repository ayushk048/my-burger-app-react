import Axios from "../../Axios-Order"
import { GET_ORDERS_SUCCESS, GET_ORDERS_FAIL, POST_ORDER_FAIL, POST_ORDER_START, POST_ORDER_SUCCESS, GET_ORDERS_START } from "./actionTypes"


export const getOrdersStart = () => {
    return {
        type: GET_ORDERS_START,
        loading: true
    }
}

export const getOrdersSuccess = (orders) => {

    console.log(orders);
    return {
        type: GET_ORDERS_SUCCESS,
        order: orders
    }
}

export const getOrdersFail = (err) => {
    return {
        type: GET_ORDERS_FAIL,
        error: err
    }
}

export const getOrders = () => {
    console.log('in action');
    return dispatch => {

        dispatch(getOrdersStart());
        Axios.get('/orders.json')
            .then(res => {
                let fetchOrder = [];
                for (const key in res.data) {
                    fetchOrder.push({ id: key, ...res.data[key] });
                }
                dispatch(getOrdersSuccess(fetchOrder));
                console.log(fetchOrder);
            })
            .catch(err => {
                dispatch(getOrdersFail(err))
            })
    }
}

export const postOrderSuccess = (id, orderInfo) => {
    return {
        type: POST_ORDER_SUCCESS,
        orderId: id,
        orderInfo: orderInfo,
        purchased: true
    }
}


export const postOrderFail = (error) => {
    return {
        type: POST_ORDER_FAIL,
        error: error
    }
}

export const postOrderStart = () => {
    return {
        type: POST_ORDER_START,
        loading: true
    }
}




export const postOrder = (order) => {
    return dispatch => {
        // Axios.post('/orders', order)
        dispatch(postOrderStart())
        Axios.post('/orders.json', order)
            .then(res => {
                console.log(res.data);
                dispatch(postOrderSuccess(res.data, order));
            })
            .catch(err => {
                dispatch(postOrderFail(err))
                console.log('Loading error closed...');
                console.log(err);
            })
    }
}