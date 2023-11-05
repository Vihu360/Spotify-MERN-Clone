import { Icon } from '@iconify/react';

const Login = ({text, iconName, className}) =>{
    return (
        // <div className=''>
        //     <a className='' href="">Continue with Google <Icon icon="flat-color-icons:google" /></a>

        // </div>

        <div className="flex flex-col mb-3 space-y-2">

        <a href='###'
          className="p-2.5 w-80 flex items-center gap-4 bg-black cursor-default font-semibold text-white border-gray-400 border-2 rounded-full hover:border-white">
        <Icon className="mt-1 ml-10" icon={iconName} width="21" />
            {text}
            </a>
      </div>
    );
};

export default Login;