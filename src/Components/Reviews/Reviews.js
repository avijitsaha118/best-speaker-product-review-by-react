import React from 'react';
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h1 className='mt-3'>Customer Review</h1>
            <h3 className='font-medium mt-2'>Total Number of Review: {reviews.length}</h3>
            <div className='grid grid-cols-3 gap-4 rounded-lg mt-2'>

                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }

            </div>
        </div>

    );
};

export default Reviews;