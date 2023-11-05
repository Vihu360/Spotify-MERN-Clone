import React from 'react'
import { Icon } from '@iconify/react';


function IconText({IconName, DisplayText, Active}) {
  return (
    <div className='flex items-center justify-start hover:cursor-pointer'>

        <div className='px-5 py-2'>
        <Icon icon={IconName} color={Active?'white':"gray"} width="25"/>
        </div>


        <div className={`${Active?'text-white':'text-gray-400'} text-lg font-semibold hover:text-white`}>
            {DisplayText}
        </div>
      
    </div>
  )
}

export default IconText;
