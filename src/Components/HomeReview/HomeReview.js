import React from 'react';
import Photo from '../../Images/bose-sounlink.jpg'

const HomeReview = ({ review }) => {
    const { name, details, rattings, star } = review;
    return (
        <div className="flex flex-col justify-between">
            <div className='flex items-center'>
                <img className='w-10 h-10 rounded-full ml-6' src={Photo} alt='' />

                {/* <div className='text-sm'>
                      <p className='text-gray-900 leading-none'>
                             {name}
                      </p>
                      <p className='text-gray-600'>
                            General only
                      </p>
                  </div> */}
            </div>
            <div className="rounded-lg shadow-lg bg-green max-w-sm">
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    {/* <img ClassName="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" /> */}
                </a>
                <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
                    <p className="text-gray-700 text-base mb-4">

                    </p>
                    <p><small>Ratting 5 out of {rattings} {star}</small></p>
                    <h5>{details}</h5>
                </div>

            </div>
        </div>
    );
};

export default HomeReview;