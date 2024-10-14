
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
                <div className='flex flex-col w-full items-center njfonts text-white relative'>
                    <img src="/public/contactImg/mikasaAvatar.webp" alt="Mikasa" className='absolute top-[-82px]' />
                    <img src="/public/contactImg/saskiSmall.webp" alt="Mikasa" className='absolute top-0 left-0' />
                    <img src="/public/contactImg/cloud.webp" alt="cloud" className='absolute top-[152px] left-[113px]' />
                    <img src="/public/contactImg/cloud.webp" alt="cloud" className='absolute top-[74px] right-[87px]' />
                    <img src="/public/contactImg/cloud.webp" alt="cloud" className='absolute bottom-[38px] left-[175px]' />
                    <img src="/public/contactImg/cloud.webp" alt="cloud" className='absolute bottom-[110px] right-[174px]' />

                    <p className='text-2xl pt-[111px]'>Volodymyr Kravets</p>
                    <p className='text-xl pt-[13px]'>Front-END</p>

                    <div className='flex pt-[75px] justify-center gap-[70px] mb-[90px] '>

                        <a href="#" className='flex items-center justify-center w-10 h-10 bg-telegram-bg rounded-full '> <img src="/contactImg/telegram.webp" alt="logo-contact" /></a>

                        <a href="#" className='flex items-center justify-center w-10 h-10 bg-brown-black rounded-full '> <img src="/contactImg/google.webp" alt="logo-contact" /></a>

                        <a href="#" className='flex items-center justify-center w-10 h-10 bg-viber-bg rounded-full '> <img src="/contactImg/viber.webp" alt="logo-contact" /></a>

                        <a href="#" className='flex items-center justify-center w-10 h-10 bg-brown-black rounded-full '> <img src="/contactImg/discord.webp" alt="logo-contact" /></a>

                        <a href="#" className='flex items-center justify-center w-10 h-10 bg-brown-black rounded-full '> <img src="/contactImg/github.webp" alt="logo-contact" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;