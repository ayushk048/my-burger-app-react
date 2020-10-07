import * as actionType from './action';

const initialState = {
    ingredients: {
        salad: 0,
        cheese: 0,
        meat: 0,
        bacon: 0
    },
    totalPrice: 4,
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
        default:
            return state;
    }


}

export default reducer;