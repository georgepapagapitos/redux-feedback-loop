import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Review() {

  const history = useHistory();

  const feedback = useSelector(store => {
    return store.feedbackReducer;
  });

  const submitFeedback = (event) => {
    event.preventDefault();
    console.log('submit');
    history.push('/');
  }

  return (
    <>
      <h1>Review Your Feedback</h1>
      <ul>
        <li>Feelings: {feedback.feeling}</li>
        <li>Understanding: {feedback.understanding}</li>
        <li>Support: {feedback.support}</li>
        <li>Comments: {feedback.comments}</li>
      </ul>
      <button onClick={submitFeedback} type="button">Submit</button>
      
    </>
  )
}

export default Review;