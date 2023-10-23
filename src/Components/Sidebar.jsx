import React, { useState } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='md:block hidden'>
            <div className=''>
                <button onClick={() => setIsOpen((prev) => !prev)} className='flex font-bold'>
                    Category
                    {!isOpen ? (
                        <RiArrowDownSLine className='ml-20 my-2' />)
                        :
                        <RiArrowUpSLine className='ml-20 my-2' />
                    }
                </button>
                {isOpen && (
                    <div className='absolute h-10 w-44'>
                        <ul>
                            <li className='cursor-pointer text-[#505050]'>Mobile accessory</li>
                            <li className='cursor-pointer text-[#505050]'>Electronics</li>
                            <li className='cursor-pointer text-[#505050]'>Smartphones </li>
                            <li className='cursor-pointer text-[#505050]'>Modern tech</li>
                            <li className='text-[#0D6EFD] cursor-pointer'>see all</li>
                        </ul>
                    </div>
                )

                }

            </div>

          
            


        </div>
    )
}

export default Sidebar;