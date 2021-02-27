import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function SupportForm() {

  const dispatch = useDispatch();

  const [support, setSupport] = useState('');

  const sendSupport = (event) => {
    console.log('support', support);
    if(support === '') {
      event.preventDefault();
      alert('Please select a number!');
    } else {
      dispatch({
        type: 'SET_SUPPORT',
        payload: {support}
      })
    }
  }

  return (
    <div className="container">
      <h1>How well are you being supported?</h1>
      <div>
      <form>
        <p>Support?</p>
        <input onChange={event => setSupport(event.target.value)} type="number" min="1" max="5"></input>
      </form>
      <Link to="/comment" onClick={sendSupport}>
        <button className="btn-next">NEXT</button>
      </Link>
      </div>
    </div>
  )
}

export default SupportForm;