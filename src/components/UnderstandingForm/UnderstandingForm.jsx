import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function UnderstandingForm() {

  const dispatch = useDispatch();

  // Declare local understanding state
  const [understanding, setUnderstanding] = useState('1');

  // Function that dispatches understanding selection
  // to the feedbackReducer
  const sendUnderstanding = () => {
    console.log('understanding', understanding);
    dispatch({
      type: 'SET_UNDERSTANDING',
      payload: {understanding}
    })
  }

  return (
    <div className="container">
      <h1>How well are you understanding the content?</h1>
      <div className="dropdown">
        <label>Understanding?
          <select onChange={event => setUnderstanding(event.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>  
      </div>
      <Link to="/">
        <button className="btn back">BACK</button>
      </Link>
      <Link to="/support" onClick={sendUnderstanding}>
        <button className="btn next">NEXT</button>
      </Link>      
    </div>
  )
}

export default UnderstandingForm;