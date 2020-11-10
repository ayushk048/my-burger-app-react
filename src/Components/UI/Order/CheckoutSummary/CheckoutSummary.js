import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import Burger from '../../../Burger/Burger'
import Button from '../../Button/Button'
import './CheckoutSummary.css'

export const CheckoutSummary = (props) => {
    const ings = useSelector(state => state.burger.ingredients);
    const price = useSelector(state => state.burger.totalPrice);

    console.log('checkout', props);

    return (
        <div className='CheckoutSummary'>
            {ings.salad || ings.cheese || ings.meat || ings.becon ?
                <>
                    <div style={{ margin: '20px' }}>Hope you like it!</div>
                    <div style={{ width: '100%', margin: 'auto' }}>
                        <Burger ingredients={ings} />
                    </div>
                    <h4>Price : <strong>{price.toFixed(2)} $</strong></h4>
                    <Button btnType="Success" clicked={props.checkoutConfirm}>Confirm</Button>
                    <Button btnType="Danger" clicked={props.checkoutCancel} >Cancel</Button>
                </>
                : <Redirect to='/' />}

        </div >
    )
}
