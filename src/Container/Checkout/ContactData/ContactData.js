
import React, { Component } from 'react'
import Button from '../../../Components/UI/Button/Button'
import './ContactData.css'
import Auxilary from '../../../HOC/Auxilary/Auxilary';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import Input from '../../../Components/UI/Input/Input';
import { connect } from 'react-redux';
import { postOrder } from '../../../store/actions/ordersAction';
import { Redirect } from 'react-router';



export class ContactData extends Component {
    state = {
        orderFrom: {
            name: {
                inputtype: 'input',
                attributes: {
                    label: 'Name',
                    name: 'name',
                    placeholder: 'Your Name',
                    type: 'text'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 3
                },
                valid: false,
                touched: false
            },
            email: {
                inputtype: 'input',
                attributes: {
                    label: 'Email',
                    name: 'email',
                    placeholder: 'Your Email',
                    type: 'email'
                },
                value: '',
                validation: {
                    required: true,
                    email: true

                },
                valid: false,
                touched: false
            },
            street: {
                inputtype: 'input',
                attributes: {
                    label: 'Street',
                    name: 'street',
                    placeholder: 'Street / Society ',
                    type: 'text'
                },
                value: '',
                validation: {
                    required: true,

                },
                valid: false,
                touched: false
            },
            country: {
                inputtype: 'input',
                attributes: {
                    label: 'Country',
                    name: 'country',
                    placeholder: 'Your Country',
                    type: 'text'
                },
                value: '',
                validation: {
                    required: true,

                },
                valid: false,
                touched: false
            },
            postalCode: {
                inputtype: 'input',
                attributes: {
                    label: 'Postal Code',
                    name: 'postalCode',
                    placeholder: 'Your Postal Code',
                    type: 'text'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 4,
                    maxLength: 6

                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                inputtype: 'select',
                attributes: {
                    label: 'Delivery Method',
                    name: 'deliveryMethod',
                    placeholder: 'Your Postal Code',
                    options: [

                        { id: 1, label: 'Fast', value: 'fast' },
                        { id: 2, label: 'Standard', value: 'standard' }
                    ]
                },
                value: 'fast',
                validation: {},
                valid: true,
                touched: false
            }
        },
        isLoading: false,
        formIsValid: false
    };



    orderHandler = (event) => {
        event.preventDefault();

        const order = {
            customer: {
                name: this.state.orderFrom.name.value,
                email: this.state.orderFrom.email.value,
                address: {
                    country: this.state.orderFrom.country.value,
                    postalCode: this.state.orderFrom.postalCode.value,
                    street: this.state.orderFrom.street.value,
                },
            },
            deliveryMethod: this.state.orderFrom.deliveryMethod.value,
            ingredients: this.props.ingredients,
            price: this.props.price
        }

        // http post
        this.props.onOrderBurger(order);

    }

    inputElementChangeHandler = (event, id) => {

        console.log(event.target.value);
        let cloneOrderForm = JSON.parse(JSON.stringify(this.state.orderFrom));
        cloneOrderForm[id].value = event.target.value;
        if (cloneOrderForm[id].validation) {
            cloneOrderForm[id].valid = this.checkValidation(cloneOrderForm[id].value, cloneOrderForm[id].validation);
        }
        cloneOrderForm[id].touched = true;
        let formIsValid = false;
        for (let key in cloneOrderForm) {
            if (key === 'deliveryMethod') continue;
            formIsValid = cloneOrderForm[key].valid
        }
        this.setState({ orderFrom: cloneOrderForm, formIsValid });
    }

    checkValidation = (value, rule) => {
        let isValid = true;

        if (rule.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rule.minLength) {
            isValid = value.length >= rule.minLength && isValid;
        }

        if (rule.maxLength) {
            isValid = value.length >= rule.maxLength && isValid;
        }

        if (rule.email) {
            isValid = value.includes('@') && isValid;
        }

        if (!rule) {
            return isValid;
        }

        return isValid;
    }



    render() {
        let formElementArr = [];

        for (const key in this.state.orderFrom) {
            formElementArr.push({
                id: key,
                config: this.state.orderFrom[key]
            })
        }
        let contactData = null;
        if (this.state.isLoading) {
            contactData = <Spinner />
        } else {
            contactData = (
                <Auxilary>
                    <h4>Enter your details</h4>
                    <form onSubmit={this.orderHandler}>
                        {
                            formElementArr.map(inputElement => (
                                <Input
                                    key={inputElement.id}
                                    label={inputElement.config.attributes.label}
                                    elementType={inputElement.config.inputtype}
                                    attributes={inputElement.config.attributes}
                                    value={inputElement.config.value}
                                    changed={(event) => this.inputElementChangeHandler(event, inputElement.id)}
                                    touched={inputElement.config.touched}
                                    valid={inputElement.config.valid}
                                    shouldValidate={inputElement.config.validation} />
                            ))
                        }
                        <Button type="submit" btnType='Success' disabled={!this.state.formIsValid} >Order</Button>
                    </form>

                </Auxilary>
            );
        }

        console.log(this.props.purchased);
        return (
            < div className='ContactData' >
                {/* {this.props.ingredients} */}
                {this.props.ingredients.salad || this.props.ingredients.cheese || this.props.ingredients.meat || this.props.ingredients.becon ? contactData : this.props.history.push('/')}
                {this.props.purchased && <Redirect to="/" />}

            </div >

        )
    }
}


const stateToprops = state => {
    return {
        ingredients: state.burger.ingredients,
        price: state.burger.totalPrice,
        purchased: state.order.purchased
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger: (order) => dispatch(postOrder(order)),
    }
}


export default connect(stateToprops, mapDispatchToProps)(ContactData);
