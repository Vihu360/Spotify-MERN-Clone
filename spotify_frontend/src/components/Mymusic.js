import React from 'react'
import { Icon } from '@iconify/react';
import IconText from '../Shared/shared1/IconText';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { makeauthenticatedGETRequest } from '../utilis/serverhelper';
import SingleSongCard from '../Shared/shared1/SingleSongCard';
import {Howl, Howler} from 'howler';


function Mymusic() {

  const [songData, setSongData] = useState([]);
  const [soundPlayed, setSoundPlayed] = useState(null);
  const playSound =(songSrc)=>{

    if (soundPlayed){
      soundPlayed.stop();
    }

    var sound = new Howl({
      src: [songSrc],
      html5: true
    });
    setSoundPlayed(sound);
    sound.play();
  }

  useEffect(()=>{

    const getData = async ()=>{
      
      const response = await makeauthenticatedGETRequest("/song/get/mysong")
      setSongData(response.data);
    }
    getData();

  }, [])

  return (
    <div className='h-full w-full flex'>

      <div className='h-full bg-black w-1/5 flex flex-col items-center'>

        <div id='logo' className='p-3 mr-44'>
          <Icon className='' icon="logos:spotify" width="100" />
        </div>

        <div className='bg-neutral-900 rounded w-72 mb-5 p-1'>
          <IconText IconName="ant-design:home-filled" DisplayText="Home" />
          <IconText IconName="zondicons:search" DisplayText="Search" />
          <IconText IconName="fluent:library-16-filled" DisplayText="Library" />
          <IconText IconName="foundation:music" DisplayText="My Music" Active />
          
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
            <div className='text-white text-lg pb-4 pl-2 font-semibold'>My Music</div>
            <div className='overflow-auto'>
                {songData.map((item)=>{
                  return <SingleSongCard info={item} playsound={playSound}/>
                })}
            </div>
        </div>

      
        
      </div>
    
    </div>
  )
}


export default Mymusic;
