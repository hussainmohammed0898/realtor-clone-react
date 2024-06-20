import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import {useLocation, useNavigate} from "react-router-dom"

function Header() {
    const [pageState, setPageState] = useState("sign-in")
    const location = useLocation();
    const navigate = useNavigate();
    const auth = getAuth();
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setPageState('profile');
            }else{
                setPageState("sign-in")
            }
        });
    })
    
   function pathMatchRoute(route){
    if(route === location.pathname){
        return true;
    }
   }

  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
           <div>
            <img src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg" alt="logo" className='h-5 cursor-pointer' onClick={()=>navigate("/")}/>
            </div> 
            <div>
                <ul className='flex space-x-10 '>
                <li className={`cursor-pointer py-3 text-sm font-semibold ${pathMatchRoute("/") ? "text-black border-b-red-500" : "text-gray-400 border-b-transparent"} border-b-[3px]`} onClick={()=>navigate("/")}>Home</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold ${pathMatchRoute("/offers") ? "text-black border-b-red-500" : "text-gray-400 border-b-transparent"} border-b-[3px]`} onClick={()=>navigate("/offers")}>Offers</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold ${(pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) ? "text-black border-b-red-500" : "text-gray-400 border-b-transparent"} border-b-[3px]`} onClick={()=>navigate("/profile")}>{pageState}</li>
                </ul>
                </div> 
        </header>
    </div> 
  )
}

export default Header