import React from 'react';

const Review = ({ review }) => {
  const { name, details, rattings } = review;
  return (

    <div className="flex flex-col justify-between">
      <div className="rounded-lg shadow-lg bg-green max-w-sm">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          {/* <img ClassName="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" /> */}
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
          <p className="text-gray-700 text-base mb-4">

          </p>
          <p><small>Ratting 5 out of {rattings}</small></p>
          <h5>{details}</h5>
        </div>
      </div>
    </div>
  );
};

export default Review;