import React from 'react';

function NewReviewForm() {
  return (
    <div className="new-review-form">
      <h2>New Review</h2>
      <form>
        <input type="text" name="name" placeholder="Restaurant name" />
        <button type="submit">Add My Review</button>
      </form>
    </div>
  )
}

export default NewReviewForm;