import * as actionType from '../actions/actionTypes';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    INGREDIENT_PRICES: {
        salad: 0.5,
        cheese: 0.4,
        meat: 1.3,
        bacon: 0.7
    }
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.ADD_INGREDIENT:
            console.log(action.ingredientName);
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + state.INGREDIENT_PRICES[action.ingredientName]
            }
        case actionType.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - state.INGREDIENT_PRICES[action.ingredientName]
            }

        case actionType.SET_INGREDIENTS:
            return {
                ...state,
                totalPrice: 4,
                ingredients: action.ingredents
            }

        case actionType.SET_INGREDIENTS_FAIL:
            return {
                ...state,
                error: true
            }

        default:
            return state;
    }


}

export default reducer;