import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom';
import products from '../Data/products';
import Navbar from './Navbar';
import Footer from './Footer';
import Card from './Card';
import { AiFillStar } from "react-icons/ai";


const Details = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");

  const product = products.find(p => p.id == id);
  console.log({ product })

  return (
    <div>
      <Navbar />

      <div className='lg:px-28 bg-[#F7FAFC] md:flex justify-around py-6 flex-col px-16 '>
        <div>
          <Card
            img={product.img}
            newPrice={product.newPrice}
            oldPrice={product.oldPrice}
            reviews={product.reviews}
            star={product.star}
            descript={product.descript}
            heart={product.heart}
          />
        </div>
        <div className='py-4 '>
          <h5 className='text-[#00B517]'>In stock</h5>
          <h4 className='text-bolder text-[13px]'>GoPro HERO6 4K Action Camera - Black</h4>
          <div className='flex'>
            < AiFillStar color="#FF9017" />
            < AiFillStar color="#FF9017" />
            < AiFillStar color="#FF9017" />
            < AiFillStar color='#8B96A5' />
          </div>
          <div>
            <h5>$98.00</h5>
            <p>50-100 pcs</p>
          </div>
        </div>
      </div>
      <Footer />
      <div>

      </div>
    </div>
  )
}

export default Details;