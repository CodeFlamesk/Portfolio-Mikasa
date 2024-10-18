import React from 'react';
import mainBackground from '/homeImg/mainBackground.webp';
import AudioPlayer from '@components/Player/Player';
import { Link } from 'react-router-dom';
import audio from '@components/Player/music/japan.mp3';
import { gsap } from 'gsap';

const Home = () => {
    return (
        <div className="w-full min-h-screen bg-cover bg-center bg-repeat inline-flex justify-center relative overflow-hidden home-bg">


            <div className='flex flex-col flex-wrap items-center gap-6 h-720:gap-y-2 pt-16 lg:pt-0  '>
                <Link to="/home/about" className=" btn flex items-end   lg:mt-16 h-850:mt-6 ">
                    Mikasa
                    <img src="/homeImg/aboutLogo.webp" alt="aboutLogo" className=" w-[35px] h-[44px] lg:w-full lg:h-full " width="35"
                        height="44" />

                </Link>
                <div className="flex flex-col lg:flex-row items-center gap-y-6  gap-x-20  lg:mt-16 h-850:mt-6 ">
                    <Link to="/home/skills" className=" btn flex items-baseline  py-5 ">
                        Skills
                        <img src="/homeImg/skillsLogo.webp" alt="aboutLogo" className='rotate   w-[40px] h-[40px] lg:w-full lg:h-full' width="40"
                            height="40" />
                    </Link>
                    <Link to="/home/contact" className=" btn flex items-baseline   ">
                        Contact
                        <img src="/homeImg/message.webp" alt="aboutLogo" className=" w-[40px] h-[32px] lg:w-[78px] lg:h-[63px] " width="40"
                            height="32" />
                    </Link>
                </div>
                <Link to="/home/projects" className=" btn flex items-baseline md:mb-10 lg:mb-16 lg:mt-16 h-850:mt-6 h-850:mb-6">
                    Projects
                    <img src="/homeImg/projects.webp" alt="aboutLogo" className='scale  w-[45px] h-[29px] lg:w-[91px] lg:h-[59px] ' width="45"
                        height="29" />
                </Link>


                <div className="w-screen   mt-10 mb-[80px] md:mt-auto md:mb-24 lg:mb-16  h-850:mb-1  ">
                    <div className='flex flex-row justify-center md:flex-col xl:flex-row gap-1 md:gap-3 items-center  bg-opacity-90 text-center rounded-3xl  marquee md:animate-none '>
                        <p className='main-text whitespace-nowrap'>Give your</p>
                        <div className='min-w-[80px] min-h-[60px] md:min-h-[80px] md:w-24 flex items-center justify-center'>
                            <img src="/homeImg/heart.webp" alt="aboutLogo" className='heart min-w-[52px] h-[52px] xl:w-[72px] xl:h-[72px]' width="52"
                                height="52" />
                        </div>
                        <p className='main-text whitespace-nowrap'>to a front-end developer</p>
                    </div>
                </div>


                <div className=' bottom-3 right-6 z-40 fixed'>
                    < AudioPlayer audio={audio} styleBgInput='bg-purple' styleInput="bg-purple accent-pink hover:bg-pink hover:shadow-[inset_0_1px_10px_#9b5de5]" />
                </div>


            </div>


        </div>
    );
};

export default Home;
