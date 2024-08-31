import React from 'react';
import { filterData } from '../reviewdata';
import { FaUser } from 'react-icons/fa';
const Home = () => {
  const reviews = filterData.reviews;

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="p-4 bg-gray-100">
      <div className="mb-4 flex justify-center items-center flex-col  max-w-6xl mx-auto">
  <h2 className="text-xl font-semibold mb-2">Share Your Review</h2>
  <div className="bg-white p-4 rounded-lg shadow-md w-full">
    <form>
      <div className="flex flex-row space-x-4">
        
        <div className="mb-4 w-1/2">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
          <input type="text" id="name" className="border border-gray-300 rounded-md p-2 w-full" />
        </div>
      </div>
      <div className="mb-4">
      <label htmlFor="location" className="block text-gray-700 font-semibold mb-2">Location</label>
        <div className="flex flex-row space-x-2">
          <button type="button" className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md">Home</button>
          <button type="button" className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md">Workplace</button>
          <button type="button" className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md">Lonely Roads</button>
          <button type="button" className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md">Bar</button>
          <button type="button" className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md">Institute</button>
        </div>
        <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description</label>
        <textarea id="description" className="border border-gray-300 rounded-md p-2 w-full" rows="4"></textarea>
      </div>
      <div>
        
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">Submit</button>
    </form>
  </div>
</div>


        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">

              <h3 className="text-lg font-semibold flex flex-row gap-2"><FaUser className='mt-1'></FaUser>{review.name}</h3>
              <p className="mt-2 text-gray-700">{review.comment}</p>
              <div className="mt-4 flex justify-between text-blue-600">
                <span>📍 {review.location}</span>
                <span>🔍</span>
                <span>📅</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
