import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

function Review() {

  const history = useHistory();
  
  const feedback = useSelector(store => {
    return store.feedbackReducer;
  });

  const onSubmit = () => {
    console.log('sending feedback to database', feedback);
    axios({
      method: 'POST',
      url: '/feedback',
      data: feedback
    })
    .then(response => {
      alert('Feedback submitted!');
      history.push('/');
    })
    .catch(err => {
      console.log(err);
    })
    
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
      <Link to="/comment" className="btn back"><button>BACK</button></Link>
      <button onClick={onSubmit} type="button" className="btn submit">SUBMIT</button>
    </>
  )
}

export default Review;