import React from 'react'
import Burger from '../../../Burger/Burger'
import Button from '../../Button/Button'
import './CheckoutSummary.css'
export const CheckoutSummary = (props) => {
    console.log('checkout', props);
    return (
        <div className='CheckoutSummary'>
            <div style={{ margin: '20px' }}>Hope you like it!</div>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Success" clicked={props.checkoutConfirm}>Confirm</Button>
            <Button btnType="Danger" clicked={props.checkoutCancel} >Cancel</Button>
        </div>
    )
}
