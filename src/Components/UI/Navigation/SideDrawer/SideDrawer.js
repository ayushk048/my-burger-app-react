import React from 'react'
import Logo from '../../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Auxilary from '../../../../HOC/Auxilary/Auxilary'
import Backdrop from '../../Backdrop/Backdrop'
import './SideDrawer.css'

const SideDrawer = (props) => {
    let sideDrawerClasses = ['SideDrawer', 'Close'];
    if (props.open) {
        sideDrawerClasses = ['SideDrawer', 'Open'];
    }

    return (
        <Auxilary>
            <Backdrop
                clicked={props.closed}
                show={props.open} />
            <div className={sideDrawerClasses.join(' ')}>
                <Logo height="11%" />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxilary>
    )
}

export default SideDrawer
