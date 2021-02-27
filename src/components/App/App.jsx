import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportForm from '../SupportForm/SupportForm';
import CommentForm from '../CommentForm/CommentForm';
import Review from '../Review/Review';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>

          <Route exact path='/'>
            <FeelingForm />
          </Route>

          <Route path="/understanding">
            <UnderstandingForm />
          </Route>

          <Route path="/support">
            <SupportForm />
          </Route>

          <Route path="/comment">
            <CommentForm />
          </Route>

          <Route path="/review">
            <Review />
          </Route>

        </Router>
    </div>
  );
}

export default App;
