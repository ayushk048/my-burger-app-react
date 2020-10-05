import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import './NavigationItems.css'

const NavigationItems = (props) => {
    return (
        <ul className="NavigationItems">
            <NavigationItem link="/" > Burger Builder </NavigationItem>
            <NavigationItem link="/orders" > Order </NavigationItem>
        </ul>
    )
}

export default NavigationItems
