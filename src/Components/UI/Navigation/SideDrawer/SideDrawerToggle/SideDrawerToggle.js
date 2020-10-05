import React from 'react'
import './SideDrawerToggle.css'

export const SideDrawerToggle = (props) => {
    return (
        <div className="DrawerToggle" onClick={props.toggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
