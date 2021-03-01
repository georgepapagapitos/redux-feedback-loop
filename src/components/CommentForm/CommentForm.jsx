import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function CommentForm() {

  const dispatch = useDispatch();

  // Declare local state of comment
  const [comments, setComments] = useState('');

  // Function that dispatches the comment to
  // the feedback reducer
  const sendComments = () => {
    console.log('comments', comments);
    dispatch({
      type: 'SET_COMMENTS',
      payload: {comments}
    })
  };

  return (
    <div className="container">
      <h1>Any comments you want to leave?</h1>
      <div>
      <form>
        <label>Comments
          <input onChange={event => setComments(event.target.value)} type="text"></input>
        </label>
      </form>
      <Link to="/support">
        <button className="btn back">BACK</button>
      </Link>
      <Link to="/review" onClick={sendComments}>
        <button className="btn next">NEXT</button>
      </Link>
      </div>
    </div>
  )
}

export default CommentForm;