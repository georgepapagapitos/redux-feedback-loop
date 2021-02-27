import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function UnderstandingForm() {

  const dispatch = useDispatch();

  const [understanding, setUnderstanding] = useState('');

  const sendUnderstanding = (event) => {
    console.log('understanding', understanding);
    if(understanding === '') {
      event.preventDefault();
      alert('Please select a number!');
    } else {
      dispatch({
        type: 'SET_UNDERSTANDING',
        payload: {understanding}
      })
    }
  }

  return (
    <div className="container">
      <h1>How well are you understanding the content?</h1>
      <div>
      <form onChange={event => setUnderstanding(event.target.value)}>
        <p>Understanding?</p>
        <input type="number" min="1" max="5"></input>
      </form>
      <Link to="/support" onClick={sendUnderstanding}>
        <button className="btn-next">NEXT</button>
      </Link>
      </div>
    </div>
  )
}

export default UnderstandingForm;