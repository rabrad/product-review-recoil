import React from 'react';
import image from '../assets/canon-d60-dslr-2.jpg';
import StarRating from './StartRating';

import { averageState } from '../store/recoils';
import { useRecoilValue } from 'recoil';

import '../styles/App.css';

const Product = () => {
  const average = useRecoilValue(averageState);
  return (
    <div>
      <div className='product-container'>
        <div className='product-info'>
          <img src={image} alt='Canon 60D DSLR' />
          <h3>Canon 60D DSLR</h3>
          <p>
            Discover your creative side with the EOS 60D. Express yourself by
            producing stunning stills or Full HD Movies using the vari-angle LCD
            screen and the advanced creative features.
          </p>
          <div className='strong'>
            <p>Product average rating: {average}% </p>
          </div>
        </div>

        <StarRating />
      </div>
    </div>
  );
};

export default Product;
