import React, { Component } from 'react';
import './Auth.css'
import Button from '../../Components/UI/Button/Button';
import Input from '../../Components/UI/Input/Input';

class Auth extends Component {
    state = {
        email: {
            inputtype: 'input',
            attributes: {
                label: 'Email',
                name: 'email',
                placeholder: 'Email',
                type: 'email'
            },
            value: '',
            validation: {
                required: true,
                email: true

            },
            touched: false
        },
        password: {
            inputtype: 'password',
            attributes: {
                label: 'Password',
                name: 'password',
                placeholder: 'Password',
                type: 'password',
                autoComplete: "off"
            },
            value: '',
            validation: {
                required: true,
                minLength: 6
            },
            valid: false,
            touched: false
        }

    }



    inputElementChangeHandler = (event, id) => {

        console.log(event.target.value);

        let cloneState = JSON.parse(JSON.stringify(this.state));
        cloneState[id].value = event.target.value;

        if (cloneState[id].validation) {
            cloneState[id].valid = this.checkValidation(cloneState[id].value, cloneState[id].validation);
        }
        cloneState[id].touched = true;

        this.setState({
            ...this.state,
            [id]: cloneState[id]
        })


        // let cloneOrderForm = JSON.parse(JSON.stringify(this.state));
        // cloneOrderForm[id].value = event.target.value;
        // if (cloneOrderForm[id].validation) {
        //     cloneOrderForm[id].valid = this.checkValidation(cloneOrderForm[id].value, cloneOrderForm[id].validation);
        // }
        // cloneOrderForm[id].touched = true;
        // let formIsValid = false;
        // for (let key in cloneOrderForm) {
        //     if (key === 'deliveryMethod') continue;
        //     formIsValid = cloneOrderForm[key].valid
        // }
        // this.setState({ orderFrom: cloneOrderForm, formIsValid });
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

    onSubmitHandler = () => {
        console.log("submit");
    }



    render() {
        const formElementArr = [];

        for (const key in this.state) {
            formElementArr.push({
                id: key,
                config: this.state[key]
            })
        }

        const form = formElementArr.map(inputElement => (
            <Input
                key={inputElement.id}
                label={inputElement.config.attributes.label}
                elementType={inputElement.config.inputtype}
                attributes={inputElement.config.attributes}
                value={inputElement.config.value}
                changed={(event) => this.inputElementChangeHandler(event, inputElement.id)}
                touched={inputElement.config.touched}
                valid={inputElement.config.valid}
                shouldValidate={inputElement.config.validation}
            />
        ))

        return (
            <div className="auth-form">
                <form>
                    {form}
                    <Button
                        btnType="Success"
                        clicked={this.onSubmitHandler}
                    >
                        Submit
                    </Button>
                </form>
            </div>
        )
    }



}

export default Auth;