import * as actionTypes from '../actions/actionTypes'

const initState = {
    orders: [],
    error: false,
    loading: false,
    purchased: false
}


const orderReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.POST_ORDER_SUCCESS:
            return {
                ...state,
                // orders: action.orderInfo,
                loading: false,
                purchased: true
            }
        case actionTypes.POST_ORDER_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            }

        case actionTypes.POST_ORDER_START:
            return {
                ...state,
                loading: action.loading
            }

        case actionTypes.GET_ORDERS_START:
            return {
                ...state,
                loading: action.loading
            }


        case actionTypes.GET_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.order,
                loading: false

            }

        case actionTypes.GET_ORDERS_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            }


        default:
            return state;
    }
}

export default orderReducer;