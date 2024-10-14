
import contactBackground from '/contactImg/contactBackground.webp';
const Contact = () => {

    return (
        <div className=" w-full min-h-screen relative flex justify-center px-10 pb-10">
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${contactBackground})`,
                    backgroundRepeat: 'repeat',
                    filter: 'blur(6px)',
                }}
            >
            </div>
            <div className='flex flex-col  rounded-t-[48px] rounded-b-[50px] mt-[170px] max-h-max bg-dark bg-opacity-85 max-w-[973px] z-10'>
                <div className='w-full'>
                    <img src="/contactImg/treeBackground.webp" alt="tree" />
                </div>
                <div className='flex flex-col w-full items-center njfonts text-white relative '>
                    <img src="/contactImg/mikasaAvatar.webp" alt="Mikasa" className='absolute top-[-82px]' />
                    <img src="/contactImg/saskiSmall.webp" alt="Mikasa" className='absolute top-0 left-0' />
                    <img src="/contactImg/cloud.webp" alt="cloud" className='absolute top-[152px] left-[113px]' />
                    <img src="/contactImg/cloud.webp" alt="cloud" className='absolute top-[74px] right-[87px]' />
                    <img src="/contactImg/cloud.webp" alt="cloud" className='absolute bottom-[38px] left-[175px] w-[52px] h-[36px]' />
                    <img src="/contactImg/cloud.webp" alt="cloud" className='absolute bottom-[110px] right-[134px] w-[52px] h-[36px]  ' />

                    <p className='text-2xl pt-[111px]'>Volodymyr Kravets</p>
                    <p className='text-xl pt-[13px]'>Front-END</p>

                    <div className='flex  pt-[75px] justify-center flex-wrap gap-8 sm:gap-[70px]  mb-6 sm:mb-[90px] mx-3 '>

                        <a href="https://t.me/Na_blesse_M " target="_blank" rel="noopener noreferrer" className='flex items-center justify-center w-10 h-10 bg-telegram-bg rounded-full hover:bg-pink-lighte duration-300 transition-all ease-in-out '    > <img src="/contactImg/telegram.webp" alt="logo-contact" /></a>

                        <a href="mailto:Flamecorporationxd@gmail.com" target="_blank" className='flex items-center justify-center w-10 h-10 bg-brown-black rounded-full   hover:bg-pink-lighte duration-300 transition-all ease-in-out '> <img src="/contactImg/google.webp" alt="logo-contact" /></a>

                        <a href="viber://chat?number=+380957066063" target="_blank" className='flex items-center justify-center w-10 h-10 bg-viber-bg rounded-full   hover:bg-pink-lighte duration-300 transition-all ease-in-out '> <img src="/contactImg/viber.webp" alt="logo-contact" /></a>

                        <a href="https://discord.com/users/539154775413882892" target="_blank" className='flex items-center justify-center w-10 h-10 bg-brown-black rounded-full   hover:bg-pink-lighte duration-300 transition-all ease-in-out '> <img src="/contactImg/discord.webp" alt="logo-contact" /></a>

                        <a href="https://github.com/CodeFlamesk" target="_blank" className='flex items-center justify-center w-10 h-10 bg-brown-black rounded-full  hover:bg-pink-lighte duration-300 transition-all ease-in-out  '> <img src="/contactImg/github.webp" alt="logo-contact" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;