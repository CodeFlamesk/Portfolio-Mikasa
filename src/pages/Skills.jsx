import { useEffect, useState } from 'react';
import skillsBackground from '/skillsImg/skillsBackground.jpeg';
import htmlLogo from '/public/skillsImg/html.jpeg';
import cssLogo from '/public/skillsImg/css.jpeg';
import jsLogo from '/public/skillsImg/js.jpeg';
import mySqlLogo from '/public/skillsImg/mySQl.jpeg';
import reactLogo from '/public/skillsImg/react.jpeg';
import scssLogo from '/public/skillsImg/scss.jpeg';
import tailwindLogo from '/public/skillsImg/tailwind.jpeg';
import pixsoLogo from '/public/skillsImg/pixso.jpeg';
import figmaLogo from '/public/skillsImg/figma.jpeg';
import photoshopLogo from '/public/skillsImg/photoshop.jpeg';
import AudioPlayer from '@components/Player/Player';
import audioone from '@components/Player/music/onepiece.mp3';
import Menu from '@components/Menu';
import { gsap } from 'gsap';
const Skills = () => {
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.inOut" } });
        tl.from('.right-anim', { x: '150vh' }, 0)
        tl.from('.left-anim', { x: '-150vh' }, 0)
        tl.from('.secondleft-anim', { x: '-150vh', delay: 0.5 }, 0)
    }, []);
    const [cardList, setCardList] = useState([
        {
            id: 1, order: 1, title: 'html', text: 'It is the standard language used to create and design web pages.', logo: htmlLogo
        },
        {
            id: 2, order: 2, title: 'css', text: 'It\'s a style sheet language used for describing the presentation of a document written in HTML or XML', logo: cssLogo,
        },
        { id: 3, order: 3, title: 'js', text: 'JavaScript is a programming language commonly used to create interactive effects within web browsers.', logo: jsLogo },
        { id: 4, order: 4, title: 'react', text: 'React is a popular JavaScript library used for building user interfaces for web applications.', logo: reactLogo },
        { id: 5, order: 5, title: 'scss', text: 'SCSS is an extension of CSS that adds variables, nesting, and mixins to simplify and enhance web styling', logo: scssLogo },
        { id: 6, order: 6, title: 'tailwind css', text: 'Tailwind CSS is a utility-first framework that enables rapid UI development with pre-defined classes for styling elements in HTML.', logo: tailwindLogo },
        { id: 7, order: 7, title: 'MySQL', text: 'MySQL is an open-source relational database management system.', logo: mySqlLogo },
    ]);

    const [currentCard, setCurrentCard] = useState(null);

    function dragStartHandler(e, card) {
        setCurrentCard(card);
        e.target.classList.add('dragging');
    }

    function dragEndHandler(e) {
        e.target.classList.remove('dragging');
    }

    function dragOverHandler(e) {
        e.preventDefault();
    }

    function dropHandler(e, card) {
        e.preventDefault();
        setCardList(prevCardList => {
            return prevCardList.map(c => {
                if (c.id === card.id) {
                    return { ...c, order: currentCard.order };
                }
                if (c.id === currentCard.id) {
                    return { ...c, order: card.order };
                }
                return c;
            });
        });
    }

    const sortCards = (a, b) => {
        return a.order - b.order;
    };

    const [designList, setDesignList] = useState([
        { id: 1, order: 1, title: 'Figma', text: 'It\'s mainly used for designing UIs and UXs for websites, apps, and digital products.', logo: figmaLogo },
        {
            id: 2, order: 2, title: 'Pixso', text: 'It\'s mainly used for designing UIs and UXs for websites, apps, and digital products.', logo: pixsoLogo,
        },
        { id: 3, order: 3, title: 'Adobe PS', text: 'Photoshop is a tool for image creation and editing, featuring photo manipulation and graphic design.', logo: photoshopLogo },
    ]);

    const [currentDesign, setCurrentDesign] = useState(null);

    function dragStartDesignHandler(e, design) {
        setCurrentDesign(design);
        e.target.classList.add('dragging');
    }

    function dragEndDesignHandler(e) {
        e.target.classList.remove('dragging');
    }

    function dragOverDesignHandler(e) {
        e.preventDefault();
    }

    function dropDesignHandler(e, design) {
        e.preventDefault();
        setDesignList(prevDesignList => {
            return prevDesignList.map(c => {
                if (c.id === design.id) {
                    return { ...c, order: currentDesign.order };
                }
                if (c.id === currentDesign.id) {
                    return { ...c, order: design.order };
                }
                return c;
            });
        });
    }

    const sortDesigns = (a, b) => {
        return a.order - b.order;
    };

    return (
        <div
            className="w-full min-h-screen bg-cover bg-center bg-repeat  relative flex justify-center lg:justify-start px-10 pb-10"
            style={{
                backgroundImage: `url(${skillsBackground})`,
                backgroundRepeat: 'repeat',
            }}
        >
            <div className='fixed top-0 right-0 z-40 right-anim'>
                <Menu colorIcon="stroke-blue-text" colorMenu="bg-blue-text border-2 border-blue-text hover:border-brownl" activeSkills="bg-opacity-40 border-none bg-blue-lighte text-dark cursor-default" />
            </div>
            <div className='flex pt-[50px]  xl:mx-[86px] gap-[18px]  flex-col lg:flex-row justify-center overflow-hidden '>
                <div className='flex flex-col  items-center bg-blue-dark opacity-80  max-h-max rounded-3xl  pb-6 secondleft-anim '>
                    <p className='piecefonts text-white text-[64px]'>Skills</p>
                    <div className='flex flex-col gap-[10px]  max-h-[750px] md:flex-wrap overflow-y-auto w-full custom-scroll  md:w-[658px] px-3 md:px-6 '>
                        {cardList.sort(sortCards).map(card => (
                            <div
                                key={card.id}
                                className='bg-blue-lighte p-4 md:w-[300px]  cursor-grab inline-flex flex-row rounded-3xl hover:rounded-md duration-300 ease-in-out transition-all gap-[18px] border-box '
                                draggable={true}
                                onDragStart={(e) => dragStartHandler(e, card)}
                                onDragLeave={(e) => dragEndHandler(e)}
                                onDragEnd={(e) => dragEndHandler(e)}
                                onDragOver={(e) => dragOverHandler(e)}
                                onDrop={(e) => dropHandler(e, card)}
                            >
                                <div className='flex items-center justify-center min-w-10'> <img src={card.logo} alt="logo" /></div>

                                <div className='flex flex-col njfonts max-w-[280px] '>
                                    <p className='text-2xl text-blue-text '> {card.title}</p>
                                    <p className='aboutskills text-white'>{card.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex  left-anim flex-col md:w-full bg-blue-dark  opacity-80 rounded-3xl  px-3 md:px-6 pb-6  items-center max-h-max '>
                    <p className='piecefonts text-white text-[64px]'>DESIGNS</p>
                    <div className='flex flex-col gap-[10px] max-h-[790px] md:max-h-[490px] md:flex-wrap lg:max-h-[790px] overflow-y-auto lg:flex-nowrap  rounded-3xl w-full lg:max-w-[320px] '>
                        {designList.sort(sortDesigns).map(design => (
                            <div
                                key={design.id}
                                className='bg-blue-lighte p-4  cursor-grab inline-flex flex-row rounded-3xl gap-[18px] border-box hover:rounded-md duration-300 ease-in-out transition-all  '
                                draggable={true}
                                onDragStart={(e) => dragStartDesignHandler(e, design)}
                                onDragLeave={(e) => dragEndDesignHandler(e)}
                                onDragEnd={(e) => dragEndDesignHandler(e)}
                                onDragOver={(e) => dragOverDesignHandler(e)}
                                onDrop={(e) => dropDesignHandler(e, design)}
                            >
                                <div className='flex items-center justify-center min-w-10'> <img src={design.logo} alt="logo" /></div>

                                <div className='flex flex-col njfonts md:w-full lg:max-w-[280px] '>
                                    <p className='text-2xl text-blue-text lg:w-full '> {design.title}</p>
                                    <p className='aboutskills text-white lg:w-full'>{design.text}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className=' bottom-3 right-6 z-40 fixed '>
                <AudioPlayer audio={audioone} borderColor="border-blue-text  " iconColor="#05C4F9" styleInput="bg-blue-text accent-blue-text hover:bg-blue-text  hover:shadow-[inset_0_1px_10px_#106696] " styleBgInput='bg-blue-input' />
            </div>
        </div>
    );
};

export default Skills;
