import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';

// feedbackReducer collects information from the form inputs
const feedbackReducer = (state = {}, action) => {
  // Set the feeling
  if(action.type === "SET_FEELING") {
    return {
      ...state,
      ...action.payload
    }
    // Set the understanding
  } else if(action.type === "SET_UNDERSTANDING") {
    return {
      ...state,
      ...action.payload
    }
    // Set the support
  } else if(action.type === "SET_SUPPORT") {
    return {
      ...state,
      ...action.payload
    }
    // Set the comments
  } else if(action.type === "SET_COMMENTS") {
    return {
      ...state,
      ...action.payload
    }
    // Reset the state to an empty object 
    // after user submits their feedback
  } else if(action.type === "CLEAR_FEEDBACK") {
    return {};
  }
  return state;
}

// Create the store for the provider
// and pass in the feedbackReducer
const store = createStore(
  combineReducers({
    feedbackReducer
  }),
  applyMiddleware(logger)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
