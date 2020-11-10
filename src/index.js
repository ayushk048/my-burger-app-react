import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import burgerBuilderReducer from './store/reducers/burgerBuilderReducer';
import ordersReducer from './store/reducers/ordersReducer';
import thunk from 'redux-thunk';

const combinedReducer = combineReducers({
  burger: burgerBuilderReducer,
  order: ordersReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combinedReducer, composeEnhancers(applyMiddleware(thunk)));

// store.subscribe(() => console.log(store.getStore()));


ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
  ,
  document.getElementById('root')
);
