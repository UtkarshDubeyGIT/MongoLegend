import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import axiosInstance from '../axiosInstance';
import { toast } from 'react-hot-toast';
import axios from 'axios';
const Login =()=>{
  const [data,setdata] = useState({name:"",password : ""});
  const navigate = useNavigate(); // Call useNavigate to get the navigate function

  const changeHandler = (event)=>{
      const {name,value} = event.target;
      setdata((prev)=>(
          {...prev,[name] : value}
      ))
  }

  const submitHandler = async (event) => {
  event.preventDefault();
  // const { name, email, password } = data;
  try {
      const response = await axios.post('https://food-back-5pkd.onrender.com/api/v1/loggedin', 
          JSON.stringify(data), {
              headers: {
                  'Content-Type': 'application/json'
              }
          }
      );
      if (response.data.success) {
          localStorage.setItem('token', response.data.token);
          toast.success("Successfully logged in");
          window.location.replace('/');
      } else {
          toast.error("Incorrect details");
      }
  } catch (err) {
      console.error(err);
      toast.error("An error occurred while logging in. Please try again.");
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg relative -inset-y-10">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white p-2 shadow-md rounded-full">
            <div class="text-black flex flex-row">
            Algo<div class="font-bold">X</div><div>en</div>
            </div>
        </div>
        <h2 className="text-2xl font-semibold text-center text-blue-700 mb-4">Login</h2>
        <p className="text-center text-gray-500 mb-6">Sign in to your account</p>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
            <div className="relative">
              <input
                type="text"
                id="username"
                value={data.name}
                onChange={changeHandler} 
                className="w-full p-3 pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Username"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaUser className="text-gray-400 ml-2" />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <div className="relative">
              <input
                type="password"
                id="password"
                value={data.password}
                onChange={changeHandler} 
                className="w-full p-3 pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaLock className="text-gray-400 ml-2" />
              </div>
            </div>
          </div>
          
        <p className="text-center text-gray-500 mt-4 pb-4">
          I forgot my password. <a href="#" className="text-blue-600 hover:underline">Click here to reset</a>
        </p><button
            type="submit" onClick={submitHandler}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="flex justify-center mt-6">
          
          <button
            onClick={() => navigate('/signup')}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Create an Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
