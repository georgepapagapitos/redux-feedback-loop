import { useState } from 'react';
import { Link } from 'react-router-dom';
import './FeelingForm.css';

function FeelingForm({feedbackReducer}) {

  const [feeling, setFeeling] = useState('')

  return (
    <div className="container">
      <h1>How are you feeling today?</h1>
      <div>
        <form onChange={event => setFeeling(event.target.value)}>
          <p>Feeling?</p>
          <input type="number" min="1" max="5"></input>
          <Link to="/understanding" className="btn-next">
            <button onClick={feedbackReducer}>NEXT</button>
          </Link>          
        </form>
      </div>
    </div>
  )
}

export default FeelingForm;