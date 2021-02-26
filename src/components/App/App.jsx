import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import FeelingForm from '../FeelingForm/FeelingForm';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
          <Route path='/feeling'>
            <FeelingForm />
          </Route>
        </Router>
    </div>
  );
}

export default App;
