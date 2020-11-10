import React, { Component } from 'react';
import './App.css';
import Layout from './HOC/Layout/Layout'
import BurgerBuilder from './Container/BurgerBuilder/BurgerBuilder';
import { Route, Switch } from 'react-router';

import asyncComponent from './HOC/AsyncComponent/AsyncComponent';
import Auth from './Container/Auth/Auth';

const asyncOrders = asyncComponent(() => {
  return import('./Container/Orders/Orders')
})
const asyncCheckout = asyncComponent(() => {
  return import('./Container/Checkout/Checkout')
})

class App extends Component {
  render() {

    return (

      <Layout>
        <Switch>
          <Route path="/check-out" component={asyncCheckout}></Route>
          <Route path="/orders" component={asyncOrders}></Route>
          <Route path="/auth" component={Auth}></Route>
          <Route path="/" component={BurgerBuilder} ></Route>
        </Switch>
        {/* <Redirect to='/' /> */}
        {/* <BurgerBuilder /> */}
        {/* <Checkout /> */}
      </Layout>

    );
  }
}


export default App;
