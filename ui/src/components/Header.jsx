import React from 'react'
import { AccountCircleRounded } from '@mui/icons-material';
const Header = () => {
    return (
        <div className="w-full h-16 px-4 py-2 flex items-center bg-gray-100">
            <div className="flex">
                <img src="/images/logo.png" alt="Logo..." className="w-[30px] h-[30px]" />
            </div>
            <div className="flex-grow flex justify-center">
                <div className="flex space-x-4">
                    <div className='pointbar'>Find jobs</div>
                    <div className='pointbar'>About Us</div>
                </div>
            </div>
            <div className='flex justify-right'>
                <div className="flex space-x-4">
                    <AccountCircleRounded sx={{ fontSize: 40 }} className='cursor-pointer'/>
                </div>
            </div>
        </div>

    )
}

export default Header