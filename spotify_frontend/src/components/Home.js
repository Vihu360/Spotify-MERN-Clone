import React from 'react'
import { Icon } from '@iconify/react';
import IconText from '../Shared/shared1/IconText';
import { Link } from 'react-router-dom';


function HomeComponent() {
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
              <a className='hover:text-white' href='###'><Link to="/signup">Sign up</Link></a>
              <button className='px-8 h-2/3 cursor-pointer flex items-center bg-white rounded-full text-black'>
              <Link to="/login">Log in</Link></button>
            </div>
          </div>
        </div>



        <div className='content p-8 '>
          <PlaylistView/>
          <SoundofIndia/>
        </div>


      </div>
    </div>
  )
}



const PlaylistView = () => {
  return (
    <div className='text-white'>
      <div className=' text-2xl font-semibold mb-5'>Focus</div>
      <div className=' w-full flex justify-around space-x-3'>
        <Card title="Peaceful piano" description="Rest and indulge with beautiful piano pieces" link="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <Card title="Deep Music" description="Keep focus and calm with ambient and peaceful musics" link="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <Card title="Peaceful piano" description="Rest and indulge with beautiful piano pieces" link="https://images.unsplash.com/photo-1510133744874-096621a0e01e?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <Card title="Peaceful piano" description="Rest and indulge with beautiful piano pieces" link="https://plus.unsplash.com/premium_photo-1664302427357-40eb7c8fd3c0?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <Card title="Peaceful piano" description="Rest and indulge with beautiful piano pieces" link="https://images.unsplash.com/photo-1565421454302-f5f200292b3e?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <Card title="Peaceful piano" description="Rest and indulge with beautiful piano pieces" link="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        </div>
        <div className=' text-xl font-semibold py-5 '>Spotify Playlist</div>
        <div className=' w-full flex justify-around space-x-3'>
        <Card title="Peaceful piano" description="Rest and indulge with beautiful piano pieces" link="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <Card title="Deep Music" description="Keep focus and calm with ambient and peaceful musics" link="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <Card title="Peaceful piano" description="Rest and indulge with beautiful piano pieces" link="https://images.unsplash.com/photo-1510133744874-096621a0e01e?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <Card title="Peaceful piano" description="Rest and indulge with beautiful piano pieces" link="https://plus.unsplash.com/premium_photo-1664302427357-40eb7c8fd3c0?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <Card title="Peaceful piano" description="Rest and indulge with beautiful piano pieces" link="https://images.unsplash.com/photo-1565421454302-f5f200292b3e?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <Card title="Peaceful piano" description="Rest and indulge with beautiful piano pieces" link="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        </div>
    </div>
  );
};

const SoundofIndia = ()=>{
  return(
    <div>
    <div className=' text-xl text-white font-semibold py-5 '>Sounds of India</div>
    <div className=' w-full flex justify-around space-x-3'>
    <Card title="Peaceful piano" description="Rest and indulge with beautiful piano pieces" link="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <Card title="Deep Music" description="Keep focus and calm with ambient and peaceful musics" link="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <Card title="Peaceful piano" description="Rest and indulge with beautiful piano pieces" link="https://images.unsplash.com/photo-1510133744874-096621a0e01e?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <Card title="Peaceful piano" description="Rest and indulge with beautiful piano pieces" link="https://plus.unsplash.com/premium_photo-1664302427357-40eb7c8fd3c0?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <Card title="Peaceful piano" description="Rest and indulge with beautiful piano pieces" link="https://images.unsplash.com/photo-1565421454302-f5f200292b3e?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <Card title="Peaceful piano" description="Rest and indulge with beautiful piano pieces" link="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
    </div>
)}

const Card = ({title, description, link})=>{
  return(
    <div className='bg-black bg-opacity-50 w-1/6 p-4 rounded-lg cursor-pointer'>
      <div className='py-2'>
        <img className='w-full object-cover	 rounded h-28' src={link}/>
      </div>
      <div className='text-white  font-semibold py-2'>{title}</div>
      <div className='text-gray-400 text-sm'>{description}</div>
    </div>
  );
  };


export default HomeComponent;
