import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';

const feedbackReducer = (state = {}, action) => {
  if(action.type === "SET_FEELING") {
    return {
      ...state,
      ...action.payload
    }
  } else if(action.type === "SET_UNDERSTANDING") {
    return {
      ...state,
      ...action.payload
    }
  } else if(action.type === "SET_SUPPORT") {
    return {
      ...state,
      ...action.payload
    }
  } else if(action.type === "SET_COMMENTS") {
    return {
      ...state,
      ...action.payload
    }
  } else if(action.type === "CLEAR_FEEDBACK") {
    return {};
  }
  return state;
}

const store = createStore(
  combineReducers({
    feedbackReducer
  }),
  applyMiddleware(logger)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
