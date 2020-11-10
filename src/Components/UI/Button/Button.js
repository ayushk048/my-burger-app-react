import React from 'react'
import './Button.css'

const Button = (props) => {

    return (
        <button
            type={props.type ? props.type : 'button'}
            onClick={props.clicked}
            className={["Button", props.btnType].join(' ')}
            disabled={props.disabled}>
            {props.children}
        </button>
    )
}

export default Button
