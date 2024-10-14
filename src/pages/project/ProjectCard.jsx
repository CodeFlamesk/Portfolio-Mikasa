import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import projectCardBackground from '/projectCardImg/projectCardBackground.webp';
import byWayLogo from '/projectCardImg/byWayLogo.webp';
import proHouse from '/projectCardImg/proHouse.webp';
import nftLogo from '/projectCardImg/nftLogo.webp';
import wishbone from '/projectCardImg/wishbone.webp';
import ProjectCategories from './ProjectCategories';

const ProjectCard = () => {
    const [currentItems, setCurrentItems] = useState([]);
    const [activeCategory, setActiveCategory] = useState('all');
    const location = useLocation();
    const navigate = useNavigate();

    const items = [
        { id: 1, img: byWayLogo, category: 'multi', bgcolor: 'bg-blue-card' },
        { id: 2, img: proHouse, category: 'multi', bgcolor: 'bg-purple-card' },
        { id: 3, img: nftLogo, category: 'landing', bgcolor: 'bg-purple-blue-card' },
        { id: 4, img: wishbone, category: 'landing', bgcolor: 'bg-grey-card' },
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
                <div className="flex w-full flex-wrap justify-center gap-y-[20px]">
                    {currentItems.map(item => (
                        <div key={item.id} className={`${item.bgcolor} p-5 w-full md:w-[410px] mx-10 h-[240px] rounded-3xl flex items-center justify-center`}>
                            <img src={item.img} alt="Logo" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
