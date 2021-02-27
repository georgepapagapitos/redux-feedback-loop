import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './FeelingForm.css';

function FeelingForm() {

  const dispatch = useDispatch();

  const [feeling, setFeeling] = useState('')

  const sendFeeling = (event) => {
    console.log('feeling', feeling);
    console.log('event', event);
    if(feeling === '') {
      event.preventDefault();
      alert('please select a number');
    } else {
      dispatch({
        type: 'SET_FEELING',
        payload: {feeling}
      })
    }
  }

  const handleChange = (event) => {
    setFeeling(event.target.value);
  };

  return (
    <div className="container">
      <h1>How are you feeling today?</h1>
      <div>
      <form onChange={event => setFeeling(event.target.value)}>
        <p>Feeling?</p>
        <input type="number" min="1" max="5"></input>
      </form>
      <Link to="/understanding" onClick={sendFeeling}>
        <button className="btn-next">NEXT</button>
      </Link>
      </div>
    </div>
  )
}

export default FeelingForm;