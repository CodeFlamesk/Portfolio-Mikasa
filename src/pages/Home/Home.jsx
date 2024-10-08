import React from 'react';
import mainBackground from '/homeImg/mainBackground.webp';
import AudioPlayer from '@components/Player/Player';


const Home = () => {
    return (
        <div
            className="w-full h-screen bg-cover bg-center bg-no-repeat inline-flex justify-center"
            style={{ backgroundImage: `url(${mainBackground})` }}
        >
            <div className='flex flex-col items-center gap-6 pt-16 lg:pt-0'>
                <div className=" btn flex items-end   lg:mt-16 ">
                    Mikasa
                    <img src="/public/homeImg/aboutLogo.webp" alt="aboutLogo" className=" w-[35px] h-auto lg:w-full lg:h-full " />

                </div>
                <div className="flex flex-col lg:flex-row items-center gap-y-6 gap-x-20  ">
                    <div className=" btn flex items-baseline  lg:lg:mt-16 ">
                        Skills
                        <img src="/public/homeImg/skillsLogo.webp" alt="aboutLogo" className='rotate  w-[40px] h-auto lg:w-full lg:h-full' />
                    </div>
                    <div className=" btn flex items-baseline   lg:mt-16 ">
                        Contact
                        <img src="/public/homeImg/message.webp" alt="aboutLogo" className=" w-[40px] h-auto lg:w-[78px] lg:h-[63px] " />
                    </div>
                </div>
                <div className=" btn flex items-baseline  lg:mt-16 ">
                    Projects
                    <img src="/public/homeImg/projects.webp" alt="aboutLogo" className='scale  w-[45px] h-auto lg:w-[91px] lg:h-[59px] ' />
                </div>


                <div className="w-screen overflow-hidden  mt-6 md:mt-auto md:mb-28 lg:mb-6  ">
                    <div className='flex flex-row justify-center md:flex-col xl:flex-row gap-1 md:gap-3 items-center  bg-opacity-90 text-center rounded-3xl  marquee md:animate-none '>
                        <p className='main-text whitespace-nowrap'>Give your</p>
                        <div className='min-w-[80px] min-h-[60px] md:w-24 flex items-center justify-center'>
                            <img src="/public/homeImg/heart.webp" alt="aboutLogo" className='heart min-w-[52px] h-[52px] xl:w-[72px] xl:h-[72px]' />
                        </div>
                        <p className='main-text whitespace-nowrap'>to a front-end developer</p>
                    </div>
                </div>


            </div>
            <div className='absolute bottom-12 right-8'>
                < AudioPlayer />
            </div>

        </div>
    );
};

export default Home;
