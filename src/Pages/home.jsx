import React from 'react';
import Navbar from "../Components/Navbar";
import Breadcrumb from '../Components/Breadcrumb';
import Card from "../Components/Card";
import products from '../Data/products';
import { Link } from 'react-router-dom';
import Body from '../Components/Body';
import Footer from '../Components/Footer';
import Sidebar from '../Components/Sidebar';

const Home = () => {
    return (
        <div className="App">
            <Navbar />
            <Breadcrumb />
            <section className="md:flex justify-between md:px-20 px-14 md:py-7 bg-[#F7FAFC] " >
                <Sidebar />
                <div className="md:grid md:grid-cols-3 gap-10 hidden  ]">
                    {products.map((product) => (
                        <React.Fragment key={product.id}>
                            <Link to={`/details?id=${product.id}`} className="col-span-1">
                                <Card
                                    img={product.img}
                                    newPrice={product.newPrice}
                                    oldPrice={product.oldPrice}
                                    reviews={product.reviews}
                                    star={product.star}
                                    descript={product.descript}
                                    heart={product.heart}
                                />
                            </Link>
                        </React.Fragment>
                    ))}
                </div>
                <div className="grid grid-cols-1 gap-5 lg:hidden">
                    {products.map((product) => (
                        <React.Fragment key={product.id}>
                            <Link to={`/details?id=${product.id}`} className="col-span-1">
                                <Card
                                    img={product.img}
                                    newPrice={product.newPrice}
                                    oldPrice={product.oldPrice}
                                    reviews={product.reviews}
                                    star={product.star}
                                    descript={product.descript}
                                    heart={product.heart}
                                />
                            </Link>
                        </React.Fragment>
                    ))}
                </div>
            </section>
            <Body />
            <Footer />
        </div>
    );
}

export default Home;