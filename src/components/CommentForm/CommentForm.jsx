import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function CommentForm() {

  const dispatch = useDispatch();

  const [comments, setComments] = useState('');

  const sendComments = (event) => {
    console.log('comments', comments);
    dispatch({
      type: 'SET_COMMENTS',
      payload: {comments}
    })
  }

  return (
    <div className="container">
      <h1>Any comments you want to leave?</h1>
      <div>
      <form>
        <label>Comments
          <input onChange={event => setComments(event.target.value)} type="text"></input>
        </label>
      </form>
      <Link to="/review" onClick={sendComments}>
        <button className="btn-next">NEXT</button>
      </Link>
      </div>
    </div>
  )
}

export default CommentForm;