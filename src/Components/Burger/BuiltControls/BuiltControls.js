import React from 'react';
import BuiltControl from './BuiltControl/BuiltControl';
import './BuiltControls.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' }
];
const BuiltControls = (props) => {


    return (
        <div className="BuildControls" >
            <p>Current Price : <strong>{props.price.toFixed(2)} $</strong>   </p>
            {
                controls.map(control => {

                    return <BuiltControl
                        disabled={props.disabled[control.type]}
                        priceForEach={props.priceForEach[control.type]}
                        key={control.label}
                        type={control.type}
                        label={control.label}
                        added={() => props.ingredientAdded(control.type)}
                        removed={() => props.ingredientRemoved(control.type)}
                    />
                })
            }

            <button
                className="OrderButton"
                disabled={!props.purchasable}
                onClick={props.ordered}>ORDER NOW</button>

        </div>
    )
}



export default BuiltControls;

