import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import BeautyStars from 'beauty-stars';

import {
  starRateState,
  reviewState,
  errorState,
  averageState,
} from '../store/recoils';

const StartRating = () => {
  const [rate, setRate] = useRecoilState(starRateState);
  const [reviews, setReviews] = useRecoilState(reviewState);
  const [error, setError] = useRecoilState(errorState);

  const average = useRecoilValue(averageState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rate) {
      setError({ msg: 'Select the stars please' });
      return;
    }

    const review = {
      id: Date.now(),
      author: `User ${reviews.length + 1}`,
      text: e.target.input.value,
      score: rate,
    };

    setReviews([review, ...reviews]);
    setRate(0);
    setError(null);
    e.target.input.value = '';
  };

  return (
    <div className='product-rating'>
      <h4>
        Please leave us a review <br /> on this product
      </h4>
      <h5>Product average rating : {average}% </h5>

      <div className='stars'>
        <BeautyStars
          inactiveColor='#cecece'
          activeColor='#ffb400'
          size='16px'
          gap='8px'
          name='rate1'
          starCount={5}
          value={rate}
          onChange={(e) => setRate(e)}
        />
      </div>

      <form onSubmit={handleSubmit} className='review-form'>
        <input type='text' name='input' />
        <button type='submit'>Add</button>
      </form>

      <div>
        <h5>Reviews:</h5>
        {error && <p className='error-message'>{error.msg}</p>}

        {reviews.map((review, i) => (
          <div key={review.id} className='user-review'>
            <p> {review.author} </p>

            <div className='stars'>
              <BeautyStars
                inactiveColor='#cecece'
                activeColor='#ffb400'
                size='16px'
                gap='8px'
                key={i + 1}
                starCount={5}
                name={review.author}
                value={review.score}
              />
            </div>
            <span> User review: {review.text} </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartRating;
