import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function CommentForm() {

  const dispatch = useDispatch();

  const [comment, setComment] = useState('');

  const sendComment = (event) => {
    console.log('comment', comment);
    dispatch({
      type: 'SET_COMMENT',
      payload: {comment}
    })
    
  }

  return (
    <div className="container">
      <h1>Any comments you want to leave?</h1>
      <div>
      <form onChange={event => setComment(event.target.value)}>
        <label>Comments
          <input type="text"></input>
        </label>
      </form>
      <Link to="/review" onClick={sendComment}>
        <button className="btn-next">NEXT</button>
      </Link>
      </div>
    </div>
  )
}

export default CommentForm;