import React, { useState } from "react";
import "./App.css"

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");

  const handleAddReview = () => {
    if (newReview.trim() !== "") {
      // Create a new review 
      const review = {
        id: Date.now(),
        content: newReview,
      };

      // Add the new review 
      setReviews([...reviews, review]);

      // Clear the input field
      setNewReview("");
    }
  };

  const handleDeleteReview = (id) => {
    // Filter out the review 
    const updatedReviews = reviews.filter((review) => review.id !== id);
    setReviews(updatedReviews);
  };

  return (
    <div className="reviews-container">
      <h1>App Reviews</h1>

      <div className="add-review">
        <textarea
          className="review"
          rows="4"
          cols="50"
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review here"
        />
        
        <button className="submit" onClick={handleAddReview}>Submit Review</button>

      </div>

      <div className="review-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-item">
            <p>{review.content}</p>
            <button onClick={() => handleDeleteReview(review.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;