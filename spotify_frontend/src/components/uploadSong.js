import React from 'react'
import { Icon } from '@iconify/react';
import IconText from '../Shared/shared1/IconText';
import { Link, useNavigate } from 'react-router-dom';
import TextInput from '../Shared/shared1/textinput';
import CloudinaryUpload from '../Shared/shared1/cloudinaryUpload';
import { useState } from 'react';
import { makeauthenticatedPOSTRequest } from '../utilis/serverhelper';

function UploadSong() {
    
    const [name, setName] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [playlistUrl, setPlaylistUrl] = useState("");
    const [uploadedSongName, setUploadedSongName] = useState("");
    const navigate = useNavigate();


    const submitSong = async () =>{
        const data ={name, thumbnail, track:playlistUrl};
        const response = await makeauthenticatedPOSTRequest("/song/create",
         data
        );
        console.log(response);

        if(response.err){
            alert("could not upload the song")
            console.log(response.err)
        return;}
        alert("success");
        navigate("/");
    }

  return (
    <div className='h-full w-full flex'>

      <div className='h-full bg-black w-1/5 flex flex-col items-center'>

        <div id='logo' className='p-3 mr-44'>
          <Icon className='' icon="logos:spotify" width="100" />
        </div>

        <div className='bg-neutral-900 rounded w-72 mb-5 p-1'>
          <IconText IconName="ant-design:home-filled" DisplayText="Home" Active />
          <IconText IconName="zondicons:search" DisplayText="Search" />
          <IconText IconName="fluent:library-16-filled" DisplayText="Library" />
          <IconText IconName="foundation:music" DisplayText="My Music" />
          
        </div>

        <div className='bg-neutral-900 rounded w-72 p-1'>
          <IconText IconName="icon-park-solid:add" DisplayText="Create Playlist" />
          <IconText IconName="ri:heart-fill" DisplayText="Liked Songs" />
        </div>


      </div>

      {/* 2nd part of content -- right side */}

      <div className='bg-neutral-900 h-full w-4/5 overflow-auto'>
        <div className='bg-black text-gray-400 font-semibold items-center bg-opacity-50 w-full h-1/10 flex justify-end '>
          <div className='w-1/2 flex h-full'>
            <div className='w-3/5 flex justify-around items-center'>
              <a className='hover:text-white' href='###'>Premium</a>
              <a className='hover:text-white' href='###'>Download</a>
              <a className='hover:text-white' href='###'>Support</a>
            </div>
            <div className='w-2/5 flex justify-around h-full items-center'>
              <a className='hover:text-white' href='###'><Link to="/uploadSong">Upload Songs</Link></a>
              <button className='w-10 h-10 cursor-pointer flex items-center justify-center bg-white rounded-full text-black'>
              <Link to="/login"><Icon className='w-12' icon="iconamoon:profile-fill" /></Link></button>
            </div>
          </div>
        </div>



        <div className='content p-8 '>
          <div>
          <h1 className=' text-white text-2xl font-semibold mb-5'>Upload Your Songs</h1>
          </div>
          <div className='w-full flex space-x-5'>

          <TextInput label="Name" placeholder="Name of Music" value={name} setValue={setName} />
          <TextInput label="Thumbnail" placeholder="Thumbnail" value={thumbnail} setValue={setThumbnail}/>
          </div>
        </div>

        <div className=''>
            { 
            uploadedSongName? (
            
            <div className=' flex items-start p-2 ml-8 rounded bg-white w-80
             text-black'>{uploadedSongName.substring(0,33)}...</div>
            )
            : (
                
                <CloudinaryUpload setUrl={setPlaylistUrl} setName={setUploadedSongName}/> )
            }
        </div>
        <button className='ml-8 rounded w-28 p-2 mt-2 bg-white text-black' onClick={submitSong}>
            Submit song
        </button>
      </div>
    
    </div>
  )
}


export default UploadSong;
