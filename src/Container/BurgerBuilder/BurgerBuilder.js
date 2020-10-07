import React from 'react';
import { useState } from 'react'
import BuiltControls from '../../Components/Burger/BuiltControls/BuiltControls';
import Burger from '../../Components/Burger/Burger';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import Modal from '../../Components/UI/Modal/Modal';
import Auxilary from '../../HOC/Auxilary/Auxilary';
import { withErrorHandler } from '../../HOC/withErrorHandler/withErrorHandler';
import axios from '../../Axios-Order'
import Spinner from '../../Components/UI/Spinner/Spinner';
import { useSelector, useDispatch } from 'react-redux'
import * as actionType from '../../store/action'



const BurgerBuilder = (props) => {
    const [purchasing, setPurchasing] = useState(false);
    const [isLoading] = useState(false);

    const ingredients = useSelector(state => state.ingredients);
    const ingredientsPrice = useSelector(state => state.INGREDIENT_PRICES);
    const totalPrice = useSelector(state => state.totalPrice);
    const dispatcher = useDispatch();

    const disabledInfo = {
        ...ingredients
    };

    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
    }

    const purchaseHandler = () => {
        setPurchasing({
            ...purchasing,
            purchasing: true
        })
    };

    const purchaseCancelHandler = () => {
        setPurchasing({
            ...purchasing,
            purchasing: false
        })
    };

    const purchaseContinueHandler = () => {
        props.history.push('/check-out');
    }

    const updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        })
            .reduce((sum, el) => { return sum + el }, 0);
        // this.setState({ purchasable: sum > 0 });
        return sum > 0;
    }
    return (
        <Auxilary>
            {ingredients ? (
                <Auxilary>
                    <Burger ingredients={ingredients} />
                    <BuiltControls
                        priceForEach={ingredientsPrice}
                        ingredientAdded={(ing) => dispatcher({ type: actionType.ADD_INGREDIENT, ingredientName: ing })}
                        ingredientRemoved={(ing) => dispatcher({ type: actionType.REMOVE_INGREDIENT, ingredientName: ing })}
                        disabled={disabledInfo}
                        price={totalPrice}
                        purchasable={updatePurchaseState(ingredients)}
                        ordered={purchaseHandler} />
                </Auxilary>) : <Spinner />}
            <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
                {/* {orderSummary} */}

                {isLoading ?
                    <Spinner /> : ingredients ? (
                        <OrderSummary
                            price={totalPrice}
                            ingredients={ingredients}
                            cancelClicked={purchaseCancelHandler}
                            continueClicked={purchaseContinueHandler} />) : null}
            </Modal>
        </Auxilary>
    )
}


// class BurgerBuilder extends Component {


//     state = {
//         purchasing: false,
//         isLoading: false
//     }

//     componentDidMount() {
//         // axios.get('https://react-my-burger-b2c5d.firebaseio.com/ingredients.json')
//         //     .then(res => {
//         //         this.setState({ ingredients: res.data })
//         //     }).catch(err => console.log(err.message))
//         //     ;

//     }


//     updatePurchaseState(ingredients) {
//         const sum = Object.keys(ingredients).map(igKey => {
//             return ingredients[igKey];
//         })
//             .reduce((sum, el) => { return sum + el }, 0);
//         // this.setState({ purchasable: sum > 0 });
//         return sum > 0;
//     }


//     // addIngredientHandler = (type) => {
//     //     const oldCount = this.props.ings[type];
//     //     const updatedCount = oldCount + 1;
//     //     const updatedIngredients = {
//     //         ...this.props.ings
//     //     }

//     //     updatedIngredients[type] = updatedCount;
//     //     const priceAddition = this.props.INGREDIENT_PRICES[type];
//     //     const oldPrice = this.props.price;
//     //     const newPrice = oldPrice + priceAddition;
//     //     this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
//     //     this.updatePurchaseState(updatedIngredients);


//     // }

//     // removeIngredientHandler = (type) => {
//     //     const oldCount = this.props.ings[type];
//     //     if (oldCount <= 0) {
//     //         return;
//     //     }
//     //     const updatedCount = oldCount - 1;
//     //     const updatedIngredients = {
//     //         ...this.props.ings
//     //     };
//     //     updatedIngredients[type] = updatedCount;
//     //     const priceDeduction = this.props.INGREDIENT_PRICES[type];
//     //     const oldPrice = this.props.price;
//     //     const newPrice = oldPrice - priceDeduction;
//     //     this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
//     //     this.updatePurchaseState(updatedIngredients);

//     // }

//     purchaseHandler = () => {
//         this.setState({ purchasing: true });
//     };

//     purchaseCancelHandler = () => {
//         this.setState({ purchasing: false })
//     };

//     purchaseContinueHandler = () => {

//         this.props.history.push('/check-out');
//         // alert('Continued');

//         // const queryParams = [];

//         // for (const key in this.props.ings) {
//         //     queryParams.push(encodeURIComponent(key) + '=' + encodeURIComponent(this.props.ings[key]))
//         // }
//         // queryParams.push('price=' + this.props.price);
//         // const queryString = queryParams.join('&');
//         // console.log(queryString);

//         // this.props.history.push({
//         //     pathname: '/check-out',
//         //     search: '?' + queryString
//         // })
//     }

//     render() {
//         const disabledInfo = {
//             ...this.props.ings
//         };

//         for (let key in disabledInfo) {
//             disabledInfo[key] = disabledInfo[key] <= 0
//         }



//         return (
//             <Auxilary>
//                 {this.props.ings ? (
//                     <Auxilary>
//                         <Burger ingredients={this.props.ings} />
//                         <BuiltControls
//                             priceForEach={this.props.INGREDIENT_PRICES}
//                             ingredientAdded={this.props.onAddIngredients}
//                             ingredientRemoved={this.props.onremoveIngredients}
//                             disabled={disabledInfo}
//                             price={this.props.price}
//                             purchasable={this.updatePurchaseState(this.props.ings)}
//                             ordered={this.purchaseHandler} />
//                     </Auxilary>) : <Spinner />}
//                 <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>


//                     {this.state.isLoading ?
//                         <Spinner /> : this.props.ings ? (
//                             <OrderSummary
//                                 price={this.props.price}
//                                 ingredients={this.props.ings}
//                                 cancelClicked={this.purchaseCancelHandler}
//                                 continueClicked={this.purchaseContinueHandler} />) : null}
//                 </Modal>
//             </Auxilary>
//         );
//     }
// }

// const stateToProps = (state) => {
//     return {
//         ings: state.ingredients,
//         price: state.totalPrice,
//         INGREDIENT_PRICES: state.INGREDIENT_PRICES

//     }
// };

// const mapDispatcher = (dispatcher) => {
//     return {
//         onAddIngredients: (ing) => dispatcher({ type: actionType.ADD_INGREDIENT, ingredientName: ing }),
//         onremoveIngredients: (ing) => dispatcher({ type: actionType.REMOVE_INGREDIENT, ingredientName: ing }),
//     }
// }


// export default connect(stateToProps, mapDispatcher)(withErrorHandler(BurgerBuilder, axios));
export default withErrorHandler(BurgerBuilder, axios);