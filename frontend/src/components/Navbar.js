import { NavLink } from "react-router-dom";
import { useState , useEffect} from "react";
import axios from "axios";
const Navbar = ()=>{
    const [logged,setlogged] = useState(false);
    const logged_in = async()=>{
        const token = localStorage.getItem('token');
        if(!token){
            setlogged(false);
            return;
        }
        try{ 
         const res = await axios.get('https://food-back-5pkd.onrender.com/api/v1/test',
                                     {headers: {
                'Authorization': `Bearer ${token}`
            }});
         if(res.data.success){
             setlogged(true);
         }
         else{
            setlogged(false);
         }}catch(err){
            console.error(err)
            setlogged(false);
        }
     }
     useEffect(()=>{
         logged_in();
     })
    return(<div>
            <div>
            <header className="bg-blue-800 text-white flex justify-between items-center p-4">
   <div class="flex flex-row"><p>Algo</p><p class="font-bold">X</p><p>en</p></div>
     <nav className="space-x-4">
      <NavLink 
            to="/instructions"
           
            activeclassname="text-white bg-blue-600" className="bg-white text-blue-800 py-2 px-4 rounded hover:bg-gray-200">Instructions</NavLink>
        <NavLink 
            to="/reviews"
            
            activeclassname="text-white bg-blue-600" className="bg-white text-blue-800 py-2 px-4 rounded hover:bg-gray-200">Reviews</NavLink>
        {logged ? (
            <NavLink 
                to="/logout"
                activeclassname="text-white bg-blue-600" className="bg-white text-blue-800 py-2 px-4 rounded hover:bg-gray-200">Logout</NavLink>
        ) : (
            <NavLink 
                to="/login"
                
                activeclassname="text-white bg-blue-600" className="bg-white text-blue-800 py-2 px-4 rounded hover:bg-gray-200">Login</NavLink>
        )}
      </nav>
    </header>
            {/* </div>
            <div className="flex justify-between w-[100vw] h-[70px] items-center lg">
                <div className="pl-6 flex items-center"><img src="https://res.cloudinary.com/dmnjig3al/image/upload/v1716919026/Devcomm/twkeitwzyrnwjw3iq8wp.png" alt ="Error" className="w-4/6 opacity-80"></img></div>
                <div className="flex justify-center items-center mr-6">
                <div className="dropdown">
                        <button className="dropbtn">More</button>
                        <div className="dropdown-content mt-4">
                        <ul className="flex flex-col text-whitetext-lg">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/Order'>Order</NavLink></li>
                        <li><NavLink to='/About'>About</NavLink></li>
                        <li><NavLink to='/Review'>Review</NavLink></li>
                        <li><NavLink to='/Contact'>Contact</NavLink></li>
                        {
                        logged ? (<li className="flex justify-center items-center"><NavLink to='/Cart'><PiShoppingCartSimpleBold className="w-6 h-6 font-bold"/></NavLink></li>) : (<li className="flex justify-center items-center"><NavLink to='/login'>LogIn/SignUp</NavLink></li>)
                        }
                        </ul>
                        </div>
                    </div>
                    </div>
            </div>

            <div className="bg-[#FFB8B8] w-[100vw] h-[5px]"></div> */}</div>
        </div>
    )
}

export default Navbar;









































// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <header className="bg-blue-800 text-white flex justify-between items-center p-4">
//       <div class="flex flex-row"><p>Algo</p><p class="font-bold">X</p><p>en</p></div>
//       <nav className="space-x-4">
//         <NavLink 
//             to="/instruction"
//             exact
//             activeclassname="text-white bg-blue-600" className="bg-white text-blue-800 py-2 px-4 rounded hover:bg-gray-200">Instruction</NavLink>
//         <NavLink 
//             to="/reviews"
//             exact
//             activeclassname="text-white bg-blue-600" className="bg-white text-blue-800 py-2 px-4 rounded hover:bg-gray-200">Reviews</NavLink>
//         <NavLink 
//             exact
//             activeclassname="text-white bg-blue-600" className="bg-white text-blue-800 py-2 px-4 rounded hover:bg-gray-200">Reviews</NavLink>
//         {isLoggedIn ? (
//           <div><li>
//             <NavLink to="/home" activeclassname="text-white" className="text-gray-400 hover:text-white">
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <button onClick={handleLogout} className="text-gray-400 hover:text-white">
//               Logout
//             </button>
//           </li></div>
          
//         ) : (
//           <li>
//             <NavLink to="/login" activeclassname="text-white" className="text-gray-400 hover:text-white">
//               Login
//             </NavLink>
//           </li>
//         )}

//       </nav>
//     </header>
//   );
// };