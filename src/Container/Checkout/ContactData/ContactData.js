import Axios from '../../../Axios-Order';
import React, { Component } from 'react'
import Button from '../../../Components/UI/Button/Button'
import './ContactData.css'
import Auxilary from '../../../HOC/Auxilary/Auxilary';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import Input from '../../../Components/UI/Input/Input';

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
            }
        },
        isLoading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
        console.log('Loading Happaning..');
        this.setState({ isLoading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: this.state.orderFrom.name.value,
                email: this.state.orderFrom.email.value,
                address: {
                    street: this.state.orderFrom.street.value,
                    country: this.state.orderFrom.country.value,
                    postalCode: this.state.orderFrom.postalCode.value,
                },
            },
            deliveryMethod: this.state.orderFrom.deliveryMethod.value


        }

        // http post
        Axios.post('/orders.json', order)
            .then(res => {
                console.log('Loading closed...');
                // this.setState({ isLoading: false });
            })
            .catch(err => {
                this.setState({ isLoading: false });
                console.log(err);
            })

        this.props.history.push('/');
    }

    inputElementChangeHandler = (event, id) => {
        let cloneOrderForm = JSON.parse(JSON.stringify(this.state.orderFrom));
        cloneOrderForm[id].value = event.target.value;
        if (cloneOrderForm[id].validation) {
            cloneOrderForm[id].valid = this.checkValidation(cloneOrderForm[id].value, cloneOrderForm[id].validation);
        }
        cloneOrderForm[id].touched = true;
        this.setState({ orderFrom: cloneOrderForm });
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
        }
        console.log(formElementArr);
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
                    <Button btnType='Success' >Order</Button>
                </form>
            </Auxilary>
        );


        return (
            < div className='ContactData' >
                {contactData}
            </div >
        )
    }
}

export default ContactData
