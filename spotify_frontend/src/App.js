import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Logincomponent from "./components/login";
import HomeComponent from "./components/Home";
import Signupcomponent from "./components/signup";
import { useCookies } from "react-cookie";
import LoggedInHome from "./components/LoggedInHome";
import UploadSong from "./components/uploadSong";
import MyMusic from "./components/Mymusic";




function App() {
const [cookie, setCookie] = useCookies(["token"]);
console.log(cookie)
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
      {cookie.token ?(
        // logged in routes

        <Routes>
          <Route path="/" element={<LoggedInHome/>} />
          <Route path="/uploadSong" element={<UploadSong/>} />
          <Route path="/mymusic" element={<MyMusic/>} />


        </Routes>
      ) : (

        // logged out routes
        <Routes> 
        <Route path="/login" element={<Logincomponent />} />
          <Route path="/signup" element={<Signupcomponent />} />
          <Route path="/*" element={<HomeComponent/>} />

        </Routes>
      )}

      </BrowserRouter>
    </div>

  );
};

export default App

