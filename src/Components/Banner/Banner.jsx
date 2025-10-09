import React from 'react';
import { FaAppStore } from "react-icons/fa";
import { SiGoogleplay } from "react-icons/si";
import Hero from '../../assets/hero.png'

const Banner = () => {


    return(
        <div>
            <div className='text-center mt-15'>
                <h1 className=' text-black text-6xl font-extrabold'>We Build <br/><span className='text-[#632ee3]'>Productive</span> Apps</h1>
                <p className='text-[#627382] mt-6'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br/> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className='mt-10 '>
                    <button><a href='https://play.google.com/store/games?hl=en&pli=1' target='_blank' className='btn text-black bg-white border-2 border-b-black'>
                    <SiGoogleplay />Google play</a></button>
                    <button><a href='https://www.apple.com/app-store/' target='_blank' className='btn text-black bg-white border-2 border-b-black ml-5'>
                    <FaAppStore />App store</a></button>
                </div>


                <img className='mx-auto mt-5 w-[50%]' src={Hero} alt="" />

                
            </div>

        </div>
    )
}

export default Banner;