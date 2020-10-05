import React from 'react'
import './BuiltControl.css'

const BuiltControl = (props) => {
    return (
        <div className="BuildControl">
            <div className="Label">{props.label} (+{props.priceForEach}$)</div>
            <button className="Less" disabled={props.disabled} onClick={props.removed}>less</button>
            <button className="More" onClick={props.added}>More</button>
        </div>
    )
}

export default BuiltControl;
