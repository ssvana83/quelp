
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ReviewsList from './ReviewsList';
import NewReviewForm from './NewReviewForm';
import Review from './Review';
import Navbar from './Navbar';


function App() {
  return (
    <div>
      <Navbar />
       <Routes>
          <Route path="/" element={<ReviewsList />}/>
           
          <Route path="/reviews/new" element={<NewReviewForm />}/>
           
          <Route path="/reviews/:id" element={<Review />} />
         
        </Routes>
        </div>
  );
}

export default App;



