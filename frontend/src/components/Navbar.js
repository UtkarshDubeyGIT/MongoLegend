import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-blue-800 text-white flex justify-between items-center p-4">
      <div class="flex flex-row"><p>Algo</p><p class="font-bold">X</p><p>en</p></div>
      <nav className="space-x-4">
        <button className="bg-white text-blue-800 py-2 px-4 rounded hover:bg-gray-200">Instruction</button>
        <button className="bg-white text-blue-800 py-2 px-4 rounded hover:bg-gray-200">Home</button>
        <button className="bg-white text-blue-800 py-2 px-4 rounded hover:bg-gray-200">Reviews</button>
        <button className="bg-white text-blue-800 py-2 px-4 rounded hover:bg-gray-200">Log out</button>
      </nav>
    </header>
  );
};

export default Navbar;
