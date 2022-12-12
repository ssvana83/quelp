import React from 'react';
import { useParams } from 'react-router-dom';


function Review({ reviews }) {

  const params = useParams()

  console.log(params)

  const foundReview = reviews.find(review => review.id === parseInt(params.id))

  if (foundReview) {
    return (
      <div>
      <h3>{foundReview.restaurant}</h3>
      <p>{foundReview.rating} ⭐️</p>
      <p>{foundReview.content}</p>
      
      
      


    </div>
    )
  } else {
    return (<h2>That review wasnt found</h2>)
  }
}

export default Review;