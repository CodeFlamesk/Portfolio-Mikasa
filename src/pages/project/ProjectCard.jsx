import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import projectCardBackground from '/projectCardImg/projectCardBackground.webp';
import byWayLogo from '/projectCardImg/byWayLogo.webp';
import proHouse from '/projectCardImg/proHouse.webp';
import nftLogo from '/projectCardImg/nftLogo.webp';
import wishbone from '/projectCardImg/wishbone.webp';
import ProjectCategories from './ProjectCategories';
import audiona from '@components/Player/music/naruto.mp3';
import AudioPlayer from '@components/Player/Player';
const ProjectCard = () => {
    const [currentItems, setCurrentItems] = useState([]);
    const [activeCategory, setActiveCategory] = useState('all');
    const location = useLocation();
    const navigate = useNavigate();

    const items = [
        { id: 1, img: byWayLogo, category: 'multi', bgcolor: 'bg-blue-card', href: 'https://learning-management-system-steel.vercel.app/' },
        { id: 2, img: proHouse, category: 'multi', bgcolor: 'bg-purple-card', href: 'https://codeflamesk.github.io/ProHouse/home.html' },
        { id: 3, img: nftLogo, category: 'landing', bgcolor: 'bg-purple-blue-card', href: 'https://codeflamesk.github.io/NFT-Marketplace/home.html' },
        { id: 4, img: wishbone, category: 'landing', bgcolor: 'bg-grey-card', href: 'https://codeflamesk.github.io/Wishbone__animation/home.html' },
    ];

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const category = params.get('category') || 'all';
        setActiveCategory(category);

        if (category === 'all') {
            setCurrentItems(items);
        } else {
            setCurrentItems(items.filter(item => item.category === category));
        }
    }, [location]);

    return (
        <div className="w-full min-h-screen relative flex justify-center">
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${projectCardBackground})`,
                    backgroundRepeat: 'repeat',
                    filter: 'blur(9px)',
                }}
            ></div>

            <div className="flex flex-col z-10 items-center pt-[125px] select-none mb-10">
                <ProjectCategories
                    chooseCategory={category => navigate(`?category=${category}`)}
                    activeCategory={activeCategory}
                />
                <div className="flex w-full flex-wrap justify-center gap-y-[20px] ">
                    {currentItems.map(item => (
                        <a href={item.href} target='_blank' key={item.id} className={`${item.bgcolor} hover:scale-90 duration-300 transition-all ease-in-out p-5 w-full md:w-[410px] mx-10 h-[240px] rounded-3xl flex items-center justify-center`}>
                            <img src={item.img} alt="Logo" />
                        </a>
                    ))}
                </div>
            </div>
            <div className='fixed bottom-3 right-6 z-40'>
                < AudioPlayer audio={audiona} borderColor="border-brown-dark" iconColor="#FEDA7A" styleInput="bg-brownl accent-brownl hover:bg-brownl  hover:shadow-[inset_0_1px_10px_#BE9965] " styleBgInput='bg-brown-dark' />
            </div>
        </div>
    );
};

export default ProjectCard;