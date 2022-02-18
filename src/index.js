import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';




const initialState = {
  count: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PROGRESS":
      return {...state, count: state.count + action.payload}
      
  
    default:
      return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
  <App />
  </Provider>
   
    </BrowserRouter>,
  document.getElementById('root')
);


