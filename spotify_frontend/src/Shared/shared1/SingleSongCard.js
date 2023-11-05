import React from 'react'

function SingleSongCard({info, playsound}) {
    return (

        <div className='flex hover:bg-gray-200 hover:bg-opacity-20 p-2 rounded-sm' onClick={()=>{playsound(info.track)}}>

            <div
                className="w-12 h-12 bg-white bg-cover bg-center"
                style={{
                    backgroundImage: `url("${info.thumbnail}")`,
                }}
            ></div>
            <div className='flex w-full cursor-pointer '>

                <div className='text-white flex flex-col gap-1  pl-4 w-5/6'>

                    <div className='hover:underline hover:underline-offset-2 w-20'>
                        {info.name}
                    </div>
                    <div className='text-xs text-gray-400 hover:underline w-20  hover:underline-offset-2'>
                        {info.artist.firstName + " " + info.artist.lastName}
                    </div>
                </div>

                <div className='flex items-center justify-center text-gray-400'>3:44</div>

            </div>

        </div>
    )
}

export default SingleSongCard
