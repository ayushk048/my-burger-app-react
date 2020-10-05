import React from 'react';
import Auxilary from '../../../HOC/Auxilary/Auxilary';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients).map(igkey => {
        return (
            <li key={igkey}>
                <span style={{ textTransform: 'capitalize' }}>{igkey}</span> : {props.ingredients[igkey]}
            </li>
        );
    });

    return (
        <Auxilary>
            <h3>Burger</h3>
            <p>Your Burger is ready With :</p>
            <ul>
                {ingredientSummary}
            </ul>
            <h4>Price :  {props.price.toFixed(2)}$</h4>
            <p>Continue to checkout?</p>
            <Button btnType="Success" clicked={props.continueClicked}  > Continue </Button>
            <Button btnType="Danger" clicked={props.cancelClicked} > Cancel </Button>
        </Auxilary>

    )
}

export default OrderSummary 
