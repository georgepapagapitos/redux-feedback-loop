import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function FeelingForm() {

  const dispatch = useDispatch();

  // Declare local state of feeling
  // Set initial state to 1
  const [feeling, setFeeling] = useState('1')

  // Function that dispatches selected feeling
  // to the feedbackReducer
  const sendFeeling = () => {
    console.log('feeling', feeling);
    dispatch({
      type: 'SET_FEELING',
      payload: {feeling}
    })
  }

  return (
    <div className="container">
      <h1>How are you feeling today?</h1>
      <div className="dropdown">
        <label>Feeling?
          <select name="feeling" onChange={event => setFeeling(event.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
      </div>
      <div className="btn-container">
      <Link to="/understanding" onClick={sendFeeling}>
        <button className="btn next">NEXT</button>
      </Link> 
      </div>
    </div>
  )
}

export default FeelingForm;