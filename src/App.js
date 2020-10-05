import React, { Component } from 'react';
import './App.css';
import Layout from './HOC/Layout/Layout'
import BurgerBuilder from './Container/BurgerBuilder/BurgerBuilder';
import Checkout from './Container/Checkout/Checkout';
import { Route, Switch } from 'react-router';
import Orders from './Container/Orders/Orders';



class App extends Component {
  render() {

    return (

      <Layout>
        <Switch>
          <Route path="/check-out" component={Checkout}></Route>
          <Route path="/orders" component={Orders}></Route>
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
