
import './App.css';
import React, {BrowserRouter as Router} from 'react'
import NewReviewForm from './Components/NewReviewForm';
import Review from './Components/Review';
import ReviewsList from './Components/ReviewsList';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <NewReviewForm />
        <Review />
        <ReviewsList />
        <Navbar />
      </Router>
      
    </div>
  );
}

export default App;


// import {
//   BrowserRouter as Router,
//    Route, 
//    Switch
// } from 'react'



/* <Router>
        <Switch> 

          <Route exact path="/">
            <ReviewsList />
          </Route>

          <Route exact path="/reviews/new">
            <NewReviewForm />
          </Route>

          <Route exact path="/reviews/:id">
            <Review />
          </Route>


        </Switch>
      </Router> */
