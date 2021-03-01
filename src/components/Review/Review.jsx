import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

function Review() {

  const dispatch = useDispatch()

  const history = useHistory();
  
  // Grab the feedback object via the feedback reducer
  const feedback = useSelector(store => {
    return store.feedbackReducer;
  });

  /*
    feedback = {
      feeling: 3,
      understanding: 3,
      support: 3,
      comments: ...
    }
  */

  // Function that POSTS the feedback object to
  // the database
  const onSubmit = () => {
    console.log('sending feedback to database', feedback);
    axios({
      method: 'POST',
      url: '/feedback',
      data: feedback
    })
    // On a successful POST, alert the user
    // Reset the feedbackReducer to an empty object
    // Send the user back to the home page ('FeelingForm')
    .then(response => {
      alert('Feedback submitted!');
      dispatch({
        type: "CLEAR_FEEDBACK"
      })
      history.push('/');
    })
    .catch(err => {
      console.log('error posting feedback', err);
    })
    
  }

  return (
    <>
      <h1>Review Your Feedback</h1>
      <ul>
        {/* Display each property of the feedback object */}
        <li>Feelings: {feedback.feeling}</li>
        <li>Understanding: {feedback.understanding}</li>
        <li>Support: {feedback.support}</li>
        <li>Comments: {feedback.comments}</li>
      </ul>
      <Link to="/comment">
        <button className="btn back">BACK</button>
      </Link>
      <button onClick={onSubmit} type="button" className="btn submit">SUBMIT</button>
    </>
  )
}

export default Review;