import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function FeelingForm() {

  const dispatch = useDispatch();

  const [feeling, setFeeling] = useState('')

  const sendFeeling = (event) => {
    console.log('feeling', feeling);
    if(feeling === '') {
      event.preventDefault();
      alert('Please select a number!');
    } else {
      dispatch({
        type: 'SET_FEELING',
        payload: {feeling}
      })
    }
  }

  return (
    <div className="container">
      <h1>How are you feeling today?</h1>
      <div>
      <form>
        <p>Feeling?</p>
        <input onChange={event => setFeeling(event.target.value)} type="number" min="1" max="5"></input>
      </form>
      <Link to="/understanding" onClick={sendFeeling}>
        <button className="btn-next">NEXT</button>
      </Link>
      </div>
    </div>
  )
}

export default FeelingForm;