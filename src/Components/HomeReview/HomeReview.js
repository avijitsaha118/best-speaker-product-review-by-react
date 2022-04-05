import React from 'react';

const HomeReview = ({ review }) => {
    const { name, details, rattings, star, image, type } = review;
    return (
        <div className="flex flex-col justify-between">
            <div className='flex items-center'>
                <img className='w-10 h-10 rounded-full ml-6' src={image} alt='user-img'/>

                <div className='text-sm'>
                      <p className='text-gray-900 leading-none'>
                             {name}
                      </p>
                      <p className='text-xs text-gray-600'>
                            {type}
                      </p>
                  </div>
            </div>
            <div className="rounded-lg shadow-lg bg-green max-w-sm">
                <div className="p-6">
                    <p><small>Ratting {rattings} out of 5 {star}</small></p>
                    <h5>{details}</h5>
                </div>

            </div>
        </div>
    );
};

export default HomeReview;