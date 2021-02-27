import { useState } from 'react';
import { Link } from 'react-router-dom';
import './FeelingForm.css';

function FeelingForm() {

  const [feeling, setFeeling] = useState('')

  return (
    <>
      <h1>How are you feeling today?</h1>
      <div>
        <p>Feeling?</p>
        <form onChange={event => setFeeling(event.target.value)}>
            <input type="number" min="1" max="5"></input>
            <Link to="/understanding" className="btn-next">
              <button>NEXT</button>
            </Link>          
        </form>
      </div>
    </>
  )
}

export default FeelingForm;