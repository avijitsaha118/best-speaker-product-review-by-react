import React from 'react';
import useReviews from '../../Hooks/useReviews';
import HomeReview from '../HomeReview/HomeReview';

const SelectedReview = () => {
    const [reviews] = useReviews();
    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                reviews.slice(0, 3).map(review => <HomeReview
                    key={review.id}
                    review={review}
                ></HomeReview>)
            }
        </div>
    );
};

export default SelectedReview;