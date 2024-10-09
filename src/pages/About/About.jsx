
import aboutBackground from '/aboutImg/aboutBackground.webp';
import React from 'react';

import AudioPlayer from '@components/Player/Player';
import audioat from '@components/Player/music/attackTitanWarUa.mp3';

import aboutPerson from '/aboutImg/aboutPerson.webp';
const About = () => {

    return (
        <div
            className="w-full min-h-screen  bg-cover bg-center inline-flex  relative overflow-hidden"
            style={{
                backgroundImage: `url(${aboutBackground})`,
                backgroundRepeat: 'repeat'
            }}
        >
            <div className='inline-flex flex-col gap-[58px] items-center md:items-start mx-4 md:mx-[86px] z-10'>
                <div className='inline-flex text-4xl md:text-5xl lg:text-7xl gap-6 rounded-[17px] mt-16 lg:mt-[120px] atfonts text-white px-4 pt-6 pb-5 bg-opacity-80   bg-brown-dark'>
                    <img src="/homeImg/aboutLogo.webp" alt="aboutLogo" className=" w-[35px] h-auto lg:w-full lg:h-full" />
                    Mikasa
                    <img src="/homeImg/aboutLogo.webp" alt="aboutLogo" className=" w-[35px] h-auto lg:w-full lg:h-full" />
                </div>
                <div className='max-w-[682px] text-2xl md:text-3xl lg:text-[40px] bg-brown-dark atfonts text-white p-5 tracking-wider rounded-3xl text-start bg-opacity-80'>
                    I am a front-end developer who creates dynamic and intuitive interfaces for websites. I thoughtfully design every element with love and care to make the user experience as convenient and enjoyable as possible. Every website I create is like a small creation into which I put a part of myself.
                </div>
            </div>
            <div className=' absolute bottom-3 right-6 z-40'>
                < AudioPlayer audio={audioat} borderColor="border-brown-dark" iconColor="#FEDA7A" styleInput="bg-brownl accent-brownl hover:bg-brownl  hover:shadow-[inset_0_1px_10px_#BE9965] " styleBgInput='bg-brown-dark' />
            </div>
            <div className='absolute bottom-0 right-0'>
                <img src={aboutPerson} alt="person" className="w-auto  h-auto max-w-[436px] max-h-[286px]  lg:max-w-full lg:max-h-full" />
            </div>




        </div>

    );
};
export default About;