import React, { useState, useEffect} from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import NewReviewForm from './NewReviewForm';
import Review from './Review';
import ReviewsList from './ReviewsList';
import Navbar from './Navbar';



function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://quelp.onrender.com/reviews')
    .then(res => res.json())
    .then(data => setReviews(data))

  }, [])

  return (
    <div className="App">
      <h1>Quelp</h1>
      <hr />
      <h3>Reviews for Top Restaurants in your Area</h3>
      <Router>
          <Navbar />
          <Switch>
          
              <Route exact path="/">
                <ReviewsList reviews={reviews}/>
              </Route>

              <Route exact path="/reviews/new">
                <NewReviewForm />
              </Route>

             <Route exact path="/reviews/:id">
                <Review reviews={reviews}/>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;



