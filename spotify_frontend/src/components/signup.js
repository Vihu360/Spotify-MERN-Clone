// import React, { useState } from 'react'
// import { Icon } from '@iconify/react';
// import TextInput from '../Shared/shared1/textinput';
// import Login from '../Shared/shared1/loginacc';
// import { Link } from 'react-router-dom';



// function Signupcomponent() {

//     return (
//         <div className='w-full h-full flex flex-col items-center text-white bg-black cursor-default overflow-x-hidden '>
//             <nav className='p-8 w-full'>
//                 <Icon className='ms-5' icon="logos:spotify" width="120" />
//             </nav>

//             <div className='w-full h-full flex flex-col items-center'>
//                 <h1 className='font-bold text-5xl'>Sign up to start <br /> listening</h1>
//                 <TextInput
//                     label="Email address"
//                     placeholder="name@domain.com"
//                     className="mt-12 mb-3"/>
//                 <a href='###' className='text-green-500 mr-32 font-semibold cursor-pointer underline underline-offset-2'>Use phone number instead</a>

//                 <button className='bg-green-500 font-bold p-2 w-80 text-black text-lg rounded-full mt-4 '>
//     <Link to="/signup/step1">Next</Link>
// </button>


//                 <div className=' mt-8 mb-8 border w-80 border-gray-400'></div>

//                 <Login text="sign up with Google" iconName="devicon:google" />
//                 <Login text="Sign up with Facebook" iconName="logos:facebook" />

//                 <div className='flex text-white font-semibold gap-2 m-10'>
//                     <p className='text-gray-300' >Already have an account ?</p>
//                     <a href="###" className='hover:text-green-400 hover:cursor-pointer underline underline-offset-2'><Link to="/login">Log in</Link></a>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Signupcomponent



import {useState} from "react";
import {Icon} from "@iconify/react";
import TextInput from '../Shared/shared1/textinput';
import Inputpassword from '../Shared/shared1/password';
import {Link, useNavigate} from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../utilis/serverhelper";
import {useCookies} from "react-cookie";




const Signupcomponent = () => {
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cookie, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();




    const signUp = async () => {
        if (email !== confirmEmail) {
            alert(
                "Email and confirm email fields must match. Please check again"
            );
            return;
        }
        const data = {email, password, username, firstName, lastName};
        const response = await makeUnauthenticatedPOSTRequest(
            "/auth/register",
            data
        );

        if (response && !response.err){
            console.log(response);
            const token = response.token;            const date = new Date();
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
        <div className="w-full flex flex-col bg-black items-center">
            <div className="logo p-5 border-b border-solid  border-gray-300 w-full flex justify-center">
                <Icon icon="logos:spotify" width="150" />
            </div>
            <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
                <div className="font-bold mb-4 text-2xl">
                    Sign up for free to start listening.
                </div>
                <TextInput
                    label="Email address"
                    placeholder="Enter your email"
                    className="my-6"
                    value={email}
                    setValue={setEmail}
                />
                <TextInput
                    label="Confirm Email Address"
                    placeholder="Enter your email again"
                    className="mb-6"
                    value={confirmEmail}
                    setValue={setConfirmEmail}
                />
                <TextInput
                    label="Username"
                    placeholder="Enter your username"
                    className="mb-6"
                    value={username}
                    setValue={setUsername}
                />
                <Inputpassword
                    label="Create Password"
                    placeholder="Enter a strong password here"
                    value={password}
                    setValue={setPassword}
                />
                
                    <TextInput
                        label="First Name"
                        placeholder="Enter Your First Name"
                        className="my-6"
                        value={firstName}
                        setValue={setFirstName}
                    />
                    <TextInput
                        label="Last Name"
                        placeholder="Enter Your Last Name"
                        className=""
                        value={lastName}
                        setValue={setLastName}
                    />
                
                <div className=" w-full flex bg-black items-center justify-center  my-8">
                    <button
                        className="bg-green-400 font-semibold p-3 px-10 rounded-full"
                        onClick={(e) => {
                            e.preventDefault();
                            signUp();
                        
                        }}
                    >
                        Sign Up
                    </button>
                </div>
                <div className="w-full border border-solid border-gray-300"></div>
                <div className="my-6 font-semibold text-lg">
                    Already have an account?
                </div>
                <div className="border border-gray-500 text-white w-full flex items-center justify-center py-4 rounded-full font-bold">
                    <Link to="/login">LOG IN INSTEAD</Link>
                </div>
            </div>
        </div>
    );
};

export default Signupcomponent;
