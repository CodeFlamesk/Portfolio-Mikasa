
import AudioPlayer from '@components/Player/Player';
import contactBackground from '/contactImg/contactBackground.webp';
import audiona from '@components/Player/music/contact.mp3';
import Menu from '@components/Menu';
import { useEffect } from 'react';
import { gsap } from 'gsap';
const Contact = () => {
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.inOut" } });

        tl.from('.top-anim', { y: '-150vh' }, 0)
        tl.from('.right-anim', { x: '150vh' }, 0)

    }, []);
    return (
        <div className=" w-full min-h-screen relative flex justify-center px-10 pb-10">
            <div className='fixed top-0 right-0 z-40 right-anim'>
                <Menu colorIcon="stroke-brownl" colorMenu="bg-brownl border-2 border-brownl" activeContact="border-none bg-opacity-30 bg-dark text-brownl cursor-default" />
            </div>
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${contactBackground})`,
                    backgroundRepeat: 'repeat',
                    filter: 'blur(6px)',
                }}
            >
            </div>
            <div className='flex flex-col top-anim rounded-t-[48px] rounded-b-[50px] mt-[9%] max-h-max bg-dark bg-opacity-85 max-w-[973px] z-10 mb-6 md:h-850:mb-0 md:h-720:mt-[4%] '>
                <div className='w-full relative  rounded-t-[48px] hidden md:block '>
                    <img src="/contactImg/treeBackground.webp" alt="tree" className='w-full h-full object-cover' />
                </div>

                <div className='flex flex-col w-full items-center njfonts text-white relative p-6'>
                    <img src="/contactImg/mikasaAvatar.webp" alt="Mikasa" className="md:absolute md:top-[-82px]  px-6  " />
                    <img src="/contactImg/saskiSmall.webp" alt="Mikasa" className='absolute top-0 left-0 hidden md:block' />
                    <img src="/contactImg/cloud.webp" alt="cloud" className='z-10 hidden scale md:block absolute top-[152px] left-[113px]' />
                    <img src="/contactImg/cloud.webp" alt="cloud" className='  z-10 hidden h-720:hidden md:block absolute top-[74px] right-[87px]' />
                    <img src="/contactImg/cloud.webp" alt="cloud" className='z-10  hidden h-720:hidden md:block absolute bottom-[38px] left-[175px] w-[52px] h-[36px]' />
                    <img src="/contactImg/cloud.webp" alt="cloud" className='z-10 hidden cloud md:block absolute h-720:bottom-[250px] bottom-[160px] lg:bottom-[110px] right-[134px] w-[52px] h-[36px]  ' />

                    <p className='text-2xl pt-6 md:pt-[111px] text-center  ' style={{ wordSpacing: '0.5em' }}>Volodymyr Kravets</p>
                    <p className='text-xl pt-[13px]'>Front-END</p>

                    <div className='flex pt-6 md:pt-[75px] justify-center flex-wrap gap-8 md:gap-[70px]   md:mb-[90px] h-720:mb-[24px] mx-3 '>

                        <a href="https://t.me/Na_blesse_M " target="_blank" rel="noopener noreferrer" className='flex items-center justify-center w-10 h-10 z-40 bg-telegram-bg rounded-full hover:bg-pink-lighte duration-300 transition-all ease-in-out '    > <img src="/contactImg/telegram.webp" alt="logo-contact" /></a>

                        <a href="mailto:Flamecorporationxd@gmail.com" target="_blank" className='flex items-center justify-center w-10 h-10 z-40 bg-brown-black rounded-full   hover:bg-pink-lighte duration-300 transition-all ease-in-out '> <img src="/contactImg/google.webp" alt="logo-contact" /></a>

                        <a href="viber://chat?number=+380957066063" target="_blank" className='flex items-center justify-center w-10 h-10 z-40 bg-viber-bg rounded-full   hover:bg-pink-lighte duration-300 transition-all ease-in-out '> <img src="/contactImg/viber.webp" alt="logo-contact" /></a>

                        <a href="https://discord.com/users/539154775413882892" target="_blank" className='flex items-center justify-center z-40 w-10 h-10 bg-brown-black rounded-full   hover:bg-pink-lighte duration-300 transition-all ease-in-out '> <img src="/contactImg/discord.webp" alt="logo-contact" /></a>

                        <a href="https://github.com/CodeFlamesk" target="_blank" className='flex items-center justify-center w-10 h-10 z-40 bg-brown-black rounded-full  hover:bg-pink-lighte duration-300 transition-all ease-in-out  '> <img src="/contactImg/github.webp" alt="logo-contact" /></a>

                    </div>
                </div>
            </div>


            <div className=' fixed bottom-3 right-6 z-40 '>

                < AudioPlayer audio={audiona} borderColor="border-brownl" iconColor="#FEDA7A" styleInput="bg-brownl accent-brownl hover:bg-brownl  hover:shadow-[inset_0_1px_10px_#BE9965] " styleBgInput='bg-brown-dark' />
            </div>
        </div>
    );
};
export default Contact;