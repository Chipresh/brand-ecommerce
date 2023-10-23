import React from 'react';
import {LiaAngleRightSolid} from "react-icons/lia";

const Breadcrumb = () => {
    return (
        <div className='bg-[#F7FAFC] md:flex hidden'>
         <div className='flex space-x-3 px-20 p-4'>
            <div className='flex space-x-'>
                <p className='text-[#8B96A5] text-[15px] cursor-pointer'>Home</p>
                <LiaAngleRightSolid color='gray' size={22} className='cursor-pointer my-0.5' />
            </div>
            <div className='flex space-x-1'>
                <p className='text-[#8B96A5] text-[15px] cursor-pointer'>Clothings</p>
                <LiaAngleRightSolid color='gray' size={22} className='cursor-pointer my-0.5'/>
            </div>
            <div className='flex space-x-'>
                <p className='text-[#8B96A5] text-[15px] cursor-pointer'>Men's wear</p>
                <LiaAngleRightSolid color='gray' size={22} className='cursor-pointer my-0.5'/>
            </div>
            <div>
                <p  className='text-[#8B96A5] text-[15px] cursor-pointer'>Summer clothing</p>
            </div>
         </div>
        </div>
    )
}

export default Breadcrumb;