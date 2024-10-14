import { Link } from 'react-router-dom';
import narutoBackground from '/projectImg/narutoBackground.webp';
import AudioPlayer from '@components/Player/Player';
import audiona from '@components/Player/music/naruto.mp3';
const Projects = () => {
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

            <div className="flex flex-col z-10 items-center select-none">
                <p className="njfonts text-white text-[32px] md:text-[64px] pt-[40px] md:pt-[110px]">Front-end</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-[102px] pt-4'>
                    <Link to="/home/projectscard?category=landing" className='flex flex-col relative rounded-[20px] items-center'>
                        <img src="/projectImg/naruto.webp" alt="naruto" draggable="false" />
                        <p className='absolute text-white njfonts text-xl md:text-2xl lg:text-[32px] bottom-[20px]'>Landing Page</p>
                    </Link>
                    <Link to="/home/projectscard?category=multi" className='flex flex-col relative rounded-[20px] items-center'>
                        <img src="/projectImg/saski.webp" alt="saski" draggable="false" />
                        <p className='absolute text-white njfonts text-xl md:text-2xl lg:text-[32px] bottom-[20px]'>Multi-Page</p>
                    </Link>
                    <Link to="/home/projectscard?category=all" className='flex flex-col relative rounded-[20px] items-center'>
                        <img src="/projectImg/all.webp" alt="all" draggable="false" />
                        <p className='absolute text-white njfonts text-xl md:text-2xl lg:text-[32px] bottom-[20px]'>All</p>
                    </Link>

                </div>
            </div>
            <div className=' fixed bottom-3 right-6 z-40'>
                < AudioPlayer audio={audiona} borderColor="border-brown-dark" iconColor="#FEDA7A" styleInput="bg-brownl accent-brownl hover:bg-brownl  hover:shadow-[inset_0_1px_10px_#BE9965] " styleBgInput='bg-brown-dark' />
            </div>
        </div>
    );
};

export default Projects;
