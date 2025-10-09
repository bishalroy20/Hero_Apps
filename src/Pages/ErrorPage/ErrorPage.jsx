import React from 'react';
import Error_img from '../../assets/error-404.png'
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
    return (

        <div >
            <Navbar></Navbar>
            <div className='my-12'>
                <img className='flex justify-center mx-auto' src={Error_img} alt="" />

            <div>
                <h1 className='font-semibold text-[48px] text-black text-center'>Oops, page not found!</h1>
                <p className='font-medium text-[20px] text-gray-600 text-center'>The page you are looking for is not available.</p>    
            </div>

            <Link to='/'>
                <div className="text-center my-8 " >
                    <a className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white px-10" >
                      Go Home
                    </a>
                  </div>
            </Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;