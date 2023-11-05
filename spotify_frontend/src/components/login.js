import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Textinput from '../Shared/shared1/textinput';
import Inputpassword from "../Shared/shared1/password";
import Login from '../Shared/shared1/loginacc';
import { Link, useNavigate } from 'react-router-dom';
import { makeUnauthenticatedPOSTRequest } from '../utilis/serverhelper';
import {useCookies} from "react-cookie";




function Logincomponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies(["token"]);



  const login = async () => {
  
    const data = {email, password};
    const response = await makeUnauthenticatedPOSTRequest(
        "/auth/login",
        data
            );

    if (response && !response.err){
        console.log(response);
        const token = response.token;            
        const date = new Date();
        date.setDate(date.getDate() + 30);
        setCookie("token", token, {path: "/", expires: date});
        alert("success");
        navigate("/");
    }
    else{ 
        alert("failure");
    }
}




  return (
    <div className='w-full h-full flex flex-col items-center cursor-default overflow-x-hidden '>
      <nav className='p-8 bg-black w-full'>
        <Icon className='ms-5' icon="logos:spotify" width="120" />
      </nav>
      <div className='bg-zinc-800 w-full flex flex-col items-center' >
        <div className='bg-black w-1/2 h-full mt-8 rounded-md flex flex-col items-center'>
          <p className='text-white font-bold text-center text-5xl mt-20 mb-12 cursor-text'>Log in to Spotify</p>
          <Login text="Continue with Google" iconName="devicon:google" />
          <Login text="Continue with Facebook" iconName="logos:facebook" />
          <Login text="Continue with Apple" iconName="ri:apple-fill" />
          <Login text="Continue with phone" iconName="bi:phone-fill" />

          <div className=' m-7 border w-8/12 border-gray-400'></div>

          <Textinput label="Email or username" placeholder="Email or username" className="mb-2" value={email} setValue={setEmail} />
          <Inputpassword label="Password" placeholder="password" value={password} setValue={setPassword} />
          <button className='bg-green-500 font-bold p-2 w-80 mt-4 text-lg rounded-full ' onClick={(e)=>{
            e.preventDefault();
            login();
          }}>Login</button>
          <a href='###' className='text-white font-semibold underline underline-offset-2 m-8
           hover:text-green-400'>Forget your passowrd?</a>

          <div className='  border w-8/12 border-gray-400'></div>

          <div className='flex text-white font-semibold gap-2 m-10'>
            <p className='text-gray-300' >Don't have an account ?</p>
            <a href='###' className='hover:text-green-400 hover:cursor-pointer underline underline-offset-2'><Link to="/signup">Sign up for Spotify</Link></a>
          </div>


        </div>
      </div>

    </div>
  )
}

export default Logincomponent;
