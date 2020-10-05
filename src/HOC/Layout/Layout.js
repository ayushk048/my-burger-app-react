import React, { Component } from 'react';
import SideDrawer from '../../Components/UI/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../Components/UI/Navigation/Toolbar/Toolbar';
import Auxilary from '../Auxilary/Auxilary';
import './Layout.css'

class Layout extends Component {
    state = {
        showDrawer: false
    }

    sideDrawerToggleHandler = () => {
        this.setState((pervState) => {
            return { showDrawer: !pervState.showDrawer }
        })
    }

    sideDrawerCloseHandler = () => {
        this.setState({ showDrawer: false });
    }


    render() {

        return (
            <Auxilary>
                <SideDrawer open={this.state.showDrawer} closed={this.sideDrawerCloseHandler} />
                <Toolbar toggler={this.sideDrawerToggleHandler} />
                <main className="Content">
                    {this.props.children}
                </main>
            </Auxilary>
        );
    }
}

export default Layout;