import React from 'react';


const Card = ({ id, img, newPrice, oldPrice, star, reviews, descript, heart }) => {
    return (
        <>
        <section className='lg:my-0 bg-[#F7FAFC] py-6 ' >
            <div>
               <div className=''>
                  <img src={img} alt="" className='h-[250px] md:w-[260px] w-[240px] ' />
                </div>

             <div className='flex gap-2 lg:w-[260px] h-36 w-[240px]  bg-white '>
                <div className='p-4'>
                    <div className='flex gap-2'>
                        <p className='text-[18px]'>{newPrice}</p>
                        <del className='text-[16px] text-[#8B96A5]'>{oldPrice}</del>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <div className='flex my-1'>
                            {star}{star}{star}{star}{star}
                        </div>
                        <div>
                            <p >{reviews}</p>
                        </div>
                    </div>
                    <div className='w-40'>
                        <p>{descript}</p>
                    </div>
                </div>

                <div className='h-[25px] w-[25px]  md:w-[24px] border border-black-300 my-6 '>
                    <h5 className='md:px-1 my-1 md:my-1 px-1'>
                    {heart}
                    </h5>
                </div>
            </div>
            </div>
        </section>
        </>
    );
};

export default Card;



