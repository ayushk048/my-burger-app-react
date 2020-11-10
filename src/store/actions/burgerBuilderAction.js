import Axios from "../../Axios-Order";
import { ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENTS, SET_INGREDIENTS_FAIL } from "./actionTypes";

export const addIngredient = (ing) => {
    return {
        type: ADD_INGREDIENT,
        ingredientName: ing
    };
}

export const removeIngredient = (ing) => {
    return {
        type: REMOVE_INGREDIENT,
        ingredientName: ing
    };
}

export const setIngredients = (ings) => {
    return {
        type: SET_INGREDIENTS,
        ingredents: ings
    }
}

export const setIngredientsFail = (err) => {
    return {
        type: SET_INGREDIENTS_FAIL
    }
}

export const initIngredients = () => {
    return dispatch => {
        Axios.get('ingredients.json')
            .then(res => {
                dispatch(setIngredients(res.data))
            }).catch(err => {
                dispatch(setIngredientsFail())
            })

    }
}

