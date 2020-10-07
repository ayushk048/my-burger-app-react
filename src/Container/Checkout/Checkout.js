
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { CheckoutSummary } from '../../Components/UI/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData';




class Checkout extends Component {

    checkoutCancelHandler = () => {
        this.props.history.goBack();

    }

    checkoutConfirmHandler = () => {
        this.props.history.replace('/check-out/contact-data');
    }


    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.props.ings}
                    checkoutConfirm={this.checkoutConfirmHandler}
                    checkoutCancel={this.checkoutCancelHandler} />
                <Route
                    path={this.props.match.path + '/contact-data'}
                    render={(props) => (
                        <ContactData ingredients={this.props.ings} price={this.props.price} />
                    )
                    } />
            </div>
        )
    }
}

const stateToprops = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}

export default connect(stateToprops)(Checkout);