import { Link } from 'react-router-dom';
import narutoBackground from '/projectImg/narutoBackground.webp';
import AudioPlayer from '@components/Player/Player';
import audiona from '@components/Player/music/naruto.mp3';
import Menu from '@components/Menu';
import { useEffect } from 'react';
import { gsap } from 'gsap';
const Projects = () => {
    useEffect(() => {

        const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.inOut" } });
        tl.from('.right-anim', { x: '150vh' }, 0)
        tl.from('.left-anim', { x: '-200vh' }, 0)
        tl.from('.top-anim', { y: '-100vh' }, 0)
        tl.from('.secondleft-anim', { x: '-200vh', delay: 0.3 }, 0)
        tl.from('.thirdleft-anim', { x: '-200vh', delay: 0.5 }, 0)
    }, []);
    return (
        <div className="w-full min-h-screen relative flex justify-center px-10 pb-10">
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${narutoBackground})`,
                    backgroundRepeat: 'repeat',
                    filter: 'blur(4px)',
                }}
            >

            </div>
            <div className='fixed top-0 right-0 z-40 right-anim'>
                <Menu colorIcon="stroke-brownl" colorMenu="bg-brownl border-2 border-brownl" activeProject="border-none bg-opacity-30 bg-dark text-brownl cursor-default" />
            </div>
            <div className="flex flex-col-reverse  z-10 items-center select-none ">
                <p className="njfonts text-white text-[32px] h-850:pt-[20px] md:text-[64px] pt-[40px] md:pt-[110px] top-anim">Front-end</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-[102px] h-850:pt-0 pt-4'>
                    <div className='thirdleft-anim'>
                        <Link to="/home/projectscard?category=landing" className='flex flex-col relative rounded-[20px] items-center'>
                            <img src="/projectImg/naruto.webp" alt="naruto" draggable="false" />
                            <p className='absolute text-white njfonts text-xl md:text-2xl lg:text-[32px] bottom-[20px]'>Landing Page</p>
                        </Link>
                    </div>
                    <div className='secondleft-anim'>
                        <Link to="/home/projectscard?category=multi" className='flex flex-col relative rounded-[20px] items-center'>
                            <img src="/projectImg/saski.webp" alt="saski" draggable="false" />
                            <p className='absolute text-white njfonts text-xl md:text-2xl lg:text-[32px] bottom-[20px]'>Multi-Page</p>
                        </Link>
                    </div>
                    <div className='left-anim'>
                        <Link to="/home/projectscard?category=all" className='flex flex-col relative rounded-[20px] items-center'>
                            <img src="/projectImg/all.webp" alt="all" draggable="false" />
                            <p className='absolute text-white njfonts text-xl md:text-2xl lg:text-[32px] bottom-[20px]'>All</p>
                        </Link>
                    </div>





                </div>
            </div>
            <div className=' fixed bottom-3 right-6 z-40 '>
                < AudioPlayer audio={audiona} borderColor="border-brown-dark" iconColor="#FEDA7A" styleInput="bg-brownl accent-brownl hover:bg-brownl  hover:shadow-[inset_0_1px_10px_#BE9965] " styleBgInput='bg-brown-dark' />
            </div>
        </div>
    );
};

export default Projects;
