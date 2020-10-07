
import React from 'react'

import { Route } from 'react-router';
import { CheckoutSummary } from '../../Components/UI/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData';


const Checkout = (props) => {

    const checkoutCancelHandler = () => {
        props.history.goBack();

    }

    const checkoutConfirmHandler = () => {
        props.history.replace('/check-out/contact-data');
    }

    return (
        <div>
            <CheckoutSummary
                checkoutConfirm={checkoutConfirmHandler}
                checkoutCancel={checkoutCancelHandler} />
            <Route
                path={props.match.path + '/contact-data'}
                component={ContactData}
            />
        </div>
    )

}




export default Checkout;