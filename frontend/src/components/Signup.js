import { useState } from "react";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
export const SignUp =()=>{
    const [data,setdata] = useState({name:"",email:"",password : "",cpassword:""});

    const changeHandler = (event)=>{
        const {name,value} = event.target;
        setdata((prev)=>(
            {...prev,[name] : value}
        ))
    }

    const submitHandler = async (event) => {
    event.preventDefault();

    try {
        const response = await axios.post('https://food-back-5pkd.onrender.com/api/v1/signedin', JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.data.success) {
            toast.success("Successful");
            window.location.replace('/login');
        } else {
            toast.error("Invalid Details");
        }
    } catch (err) {
        console.error(err);
        toast.error("An error occurred while signing in. Please try again.");
    }
};
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg relative mt-3">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white p-2 shadow-md rounded-full">
        <div class="text-black flex flex-row">
            Algo<div class="font-bold">X</div><div>en</div>
            </div>
        </div>
        <h2 className="text-2xl font-semibold text-center text-blue-700 mb-4">Register</h2>
        <p className="text-center text-gray-500 mb-6">Create a new account</p>
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
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <div className="relative">
              <input
                type="email"
                id="email"
                value={data.email}
                onChange={changeHandler}
                className="w-full p-3 pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaEnvelope className="text-gray-400 ml-2"></FaEnvelope>
              </div>
            </div>
          </div>
          <div className="mb-4">
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
          <div className="mb-6">
            <label htmlFor="confirm-password" className="block text-gray-700 mb-2">Confirm Password</label>
            <div className="relative">
              <input
                type="password"
                id="confirm-password"
                value={data.cpassword}
                onChange={changeHandler}
                className="w-full p-3 pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm Password"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaLock className="text-gray-400 ml-2" />
              </div>
            </div>
          </div>
          <button
            type="submit" onClick={submitHandler}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
        </form>
        <div className="flex justify-center mt-6">
          
          <button
            
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
          <NavLink to ="/login">  Already have an account? Login</NavLink>
          
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;