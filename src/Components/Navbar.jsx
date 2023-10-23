import React from 'react';
import { useState } from 'react';
import logo from "../Assets/Navbar_assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import user from "../Assets/Navbar_assets/user.png";
import message from "../Assets/Navbar_assets/message.png";
import orders from "../Assets/Navbar_assets/order.png";
import cart from "../Assets/Navbar_assets/cart.png";
import { RxHamburgerMenu } from "react-icons/rx";
import flag from "../Assets/Navbar_assets/flag.png";
import { GoSearch } from "react-icons/go";
import products from '../Data/products';
import Card from './Card';



const Navbar = () => {
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        const filteredProducts = products.filter(product => product.id.toString() === searchInput);
        setSearchResults(filteredProducts.length > 0 ? filteredProducts : null);
    };
    return (
        <>
            <div className='bg-[#FFF] lg:block hidden'>
                <div className='flex justify-between mx-20 items-center my-6 '>
                    <div className=''>
                        <img src={logo} alt='Logo' className='w-[150px] h-[46px] cursor-pointer' />
                    </div>
                    <div className='flex relative'>
                        <input type="text" placeholder='Search by id'
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                            className='h-10 w-[421px] border-2 outline-none border-blue-300 ps-2 rounded-l-lg' />
                        <select className='cursor-pointer h-10 w-[145px] border-2 border-l-0 border-r-0 border-blue-300 outline-none ps-1 appearance-none'>
                            <option value="English,USD" >All Category</option>
                            <option value="English,Bri">Hot offers</option>
                            <option value="English,AM">Gift boxes</option>
                            <option value="English, SCOT">Menu item</option>
                        </select>
                        <IoIosArrowDown className='absolute right-28 top-4 pointer-events-none mb-10' color='gray' />
                        <button className='w-[100px] h-10 bg-[#127FFF] text-[#FFF] rounded-r-lg' onClick={handleSearch}>search</button>
                    </div>
                    <div className='flex my-1 space-x-6'>
                        <div className='cursor-pointer'>
                            <img src={user} alt="img" className='w-5 h-[19px] ml-2' />
                            <p className='text-[13px] font-normal'>Profile</p>
                        </div>
                        <div className='cursor-pointer'>
                            <img src={message} alt="img" className='w-5 h-[19px] ml-[14px]' />
                            <p className='text-[13px] font-normal'>message</p>
                        </div>
                        <div className='cursor-pointer'>
                            <img src={orders} alt="img" className='w-5 h-[19px] ml-2' />
                            <p className='text-[13px] font-normal'>orders</p>
                        </div>
                        <div className='cursor-pointer'>
                            <img src={cart} alt="img" className='w-5 h-[19px] ml-3' />
                            <p className='text-[13px] font-normal'>My cart</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='justify-between items-center px-20 border-t-2 md:flex hidden'>
                <div className='flex space-x-8 my-4'>
                    <div className='flex gap-1'>
                        <RxHamburgerMenu className='cursor-pointer my-1' />
                        <p className='cursor-pointer'>All Category</p>
                    </div>
                    <div>
                        <p className='cursor-pointer'>Hot offers</p>
                    </div>
                    <div>
                        <p className='cursor-pointer'>Gift boxes</p>
                    </div>
                    <div>
                        <p className='cursor-pointer'>Projects</p>
                    </div>
                    <div>
                        <p className='cursor-pointer'>Menu item</p>
                    </div>
                    <div className='flex space-x-1'>
                        <p className='cursor-pointer'>Help</p>
                        <IoIosArrowDown color='gray' className='my-1.5 cursor-pointer' />
                    </div>
                </div>

                <div className='flex space-x-8  px-11'>
                    <div className='relative flex'>

                        <select className='cursor-pointer outline-none appearance-none ml-2'>
                            <option value="English,USD" >English,USD</option>
                            <option value="English,Bri">English, BRI</option>
                            <option value="English,AM">English,AME</option>
                            <option value="English, SCOT">English, SCOT</option>
                        </select>
                        <IoIosArrowDown className='absolute pointer-events-none left-24 top-1' color='gray' />
                    </div>
                    <div className='relative flex '>
                        <p className='cursor-pointer'>Ship to</p>
                        <img src={flag} alt="flag" className='w-[22px] h-[16px] absolute right-[-24px] top-1' />
                        <IoIosArrowDown className='absolute left-20 top-1 pointer-events-none' color='gray' />
                    </div>

                </div>
            </div>
            
            <div className='md:hidden lg:hidden block'>
                    <div className='flex items-center py-4 mx-10 gap-9'>
                        <div className='flex gap-5'>
                            <RxHamburgerMenu className='my-1' color='black' size={25} />
                            <img src={logo} alt="logo" className='w-[116px] h-[36px]' />
                        </div>
                        <div className='flex gap-5'>
                            <img src={cart} alt="" className='h-[24px] w-[24px]' />
                            <img src={user} alt="" className='h-[24px] w-[24px]' />
                        </div>

                    </div>
                    <div className='flex items-center mx-16 relative py-4'>
                        <GoSearch  className='absolute right-1 left-4 my-1' onClick={handleSearch}/>
                        <input type="text" placeholder='Search by id'
                           value={searchInput}
                           onChange={(e) => setSearchInput(e.target.value)}
                            className='h-10 w-[230px] border-2 outline-none  border-gray-300 ps-10 rounded-lg bg-[#DEE2E7]' />
                    </div>
            
            </div>
            {searchResults === null ? (
            <p className='text-[red] text-[20px] flex justify-center font-[500]'>No matching products found</p>
        ) : (
            searchResults.map((product) => (
                <Card
                    key={product.id}
                    img={product.img}
                    newPrice={product.newPrice}
                    oldPrice={product.oldPrice}
                    star={product.star}
                    reviews={product.reviews}
                    descript={product.descript}
                    heart={product.heart}
                />
            ))
        )}
            
        </>
    );
};

export default Navbar;