import React from 'react';

const Home = () => {
  const reviews = Array(9).fill({
    name: "SHIVANI",
    comment: "i am found this ap . very helpful. i want ot recommendment it to all the women out there",
    location: "Location",
  });

  return (
    <div>
      <div className="p-8 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{review.name}</h3>
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
