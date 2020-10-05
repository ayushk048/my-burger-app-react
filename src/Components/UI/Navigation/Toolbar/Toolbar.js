import React from 'react'
import Logo from '../../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import { SideDrawerToggle } from '../SideDrawer/SideDrawerToggle/SideDrawerToggle'
import './Toolbar.css'

const Toolbar = (props) => {
    return (
        <header className='Toolbar'>
            <SideDrawerToggle toggle={props.toggler}></SideDrawerToggle>
            <Logo height="80%" />
            <nav className="DesktopOnly">
                <NavigationItems />
            </nav>
        </header>
    )
}

export default Toolbar
