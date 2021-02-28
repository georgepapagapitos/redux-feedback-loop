import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function SupportForm() {

  const dispatch = useDispatch();

  const [support, setSupport] = useState('1');

  const sendSupport = () => {
    console.log('support', support);
    dispatch({
      type: 'SET_SUPPORT',
      payload: {support}
    })
  }

  return (
    <div className="container">
      <h1>How well are you being supported?</h1>
      <div className="dropdown">
        <label>Support?
          <select onChange={event => setSupport(event.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>  
      </div>
      <Link to='/understanding'><button>BACK</button></Link>
      <Link to="/comment" onClick={sendSupport}>
        <button className="btn-next">NEXT</button>
      </Link>
    </div>
  )
}

export default SupportForm;