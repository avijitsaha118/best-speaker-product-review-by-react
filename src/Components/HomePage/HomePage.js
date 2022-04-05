import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import Image from '../../Images/bose-speaker.jpg';
import SelectedReview from '../SelectedReview/SelectedReview';
import './HomePage.css';

const HomePage = () => {
    const [reviews] = useReviews();
    const navigate = useNavigate();
    return (
        <div>
            <div className='container'>
                <div className='title-container'>
                    <h1 className='text-3xl'>
                        Make Your Ambience
                        <br />
                        More Pretty
                    </h1>
                    <p className='text-xl text-gray-600'> Its so easy now to decide which gadget more efficient and usefull to you. <br />
                        Take a one minutes Read and decide which box is perfect for you. Take a Tour now.
                    </p>

                </div>
                <div className='image-container'>
                    <img className='poster-image' src={Image} alt='product'></img>
                </div>

            </div>

            <div className='review-container'>
                <h1 className='font-medium'>Customer Reviews ({reviews.slice(3).length})</h1>
                <SelectedReview></SelectedReview>
                <button className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-4' onClick={() => navigate('/reviews')}>See All Reviews</button>
            </div>
        </div>
    );
};

export default HomePage;