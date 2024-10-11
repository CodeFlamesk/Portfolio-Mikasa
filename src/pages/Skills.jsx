import { useState } from 'react';
import skillsBackground from '/skillsImg/skillsBackground.webp';
import htmlLogo from '/public/skillsImg/html.webp';
import cssLogo from '/public/skillsImg/css.webp';
import jsLogo from '/public/skillsImg/js.webp'
import mySqlLogo from '/public/skillsImg/mySQl.webp'
import reactLogo from '/public/skillsImg/react.webp'
import scssLogo from '/public/skillsImg/scss.webp'
import tailwindLogo from '/public/skillsImg/tailwind.webp'
import pixsoLogo from '/public/skillsImg/pixso.webp'
import figmaLogo from '/public/skillsImg/figma.webp'
import photoshopLogo from '/public/skillsImg/photoshop.webp'
import AudioPlayer from '@components/Player/Player';
import audioone from '@components/Player/music/onepiece.mp3';

const Skills = () => {
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
        e.target.style.border = '2px solid #FFA718';
    }

    function dragEndHandler(e) {
        e.target.style.border = '2px solid #106696';

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
        { id: 3, order: 3, title: 'Adobe  PS', text: 'Photoshop is a tool for image creation and editing, featuring photo manipulation and graphic design.', logo: photoshopLogo },

    ]);
    const [currentDesign, setCurrentDesign] = useState(null);

    function dragStartDesignHandler(e, design) {
        setCurrentDesign(design);
        e.target.style.border = '2px solid #FFA718';
    }

    function dragEndDesignHandler(e) {
        e.target.style.border = '2px solid #106696';
    }

    function dragOverDesignHandler(e) {
        e.preventDefault();

    }

    function dropDesignHandler(e, design) {
        e.target.style.border = '2px solid #106696';
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
            <div className='flex pt-[40px]  xl:mx-[86px] gap-[18px] overflow-auto flex-col lg:flex-row justify-center  '>
                <div className='flex flex-col items-center bg-blue-dark opacity-80  max-h-max rounded-3xl  pb-6  '>
                    <p className='piecefonts text-white text-[64px]'>Skills</p>
                    <div className='flex flex-col gap-[10px]  max-h-[750px] md:flex-wrap overflow-y-auto w-full custom-scroll px-3 md:px-6'>
                        {cardList.sort(sortCards).map(card => (
                            <div
                                key={card.id}
                                className='bg-blue-lighte p-4  cursor-grab inline-flex flex-row rounded-3xl gap-[18px] border-box'
                                draggable={true}
                                onDragStart={(e) => dragStartHandler(e, card)}
                                onDragLeave={(e) => dragEndHandler(e)}
                                onDragEnd={(e) => dragEndHandler(e)}
                                onDragOver={(e) => dragOverHandler(e)}
                                onDrop={(e) => dropHandler(e, card)}
                            >
                                <div className='flex items-center justify-center min-w-10'>   <img src={card.logo} alt="logo" /></div>

                                <div className='flex flex-col njfonts max-w-[280px] '>
                                    <p className='text-2xl text-blue-text '> {card.title}</p>
                                    <p className='aboutskills text-white'>{card.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col bg-blue-dark  opacity-80 rounded-3xl  px-3 md:px-6 pb-6  items-center max-h-max '>
                    <p className='piecefonts text-white text-[64px]'>DESIGNS</p>
                    <div className='flex flex-col gap-[10px] max-h-[790px] md:max-h-[490px] md:flex-wrap lg:max-h-[790px] lg:flex-nowrap'>
                        {designList.sort(sortDesigns).map(design => (
                            <div
                                key={design.id}
                                className='bg-blue-lighte p-4 cursor-grab inline-flex flex-row rounded-3xl gap-[18px] border-box '
                                draggable={true}
                                onDragStart={(e) => dragStartDesignHandler(e, design)}
                                onDragLeave={(e) => dragEndDesignHandler(e)}
                                onDragEnd={(e) => dragEndDesignHandler(e)}
                                onDragOver={(e) => dragOverDesignHandler(e)}
                                onDrop={(e) => dropDesignHandler(e, design)}
                            >
                                <div className='flex items-center justify-center min-w-10'>   <img src={design.logo} alt="logo" /></div>

                                <div className='flex flex-col njfonts max-w-[280px] '>
                                    <p className='text-2xl text-blue-text '> {design.title}</p>
                                    <p className='aboutskills text-white'>{design.text}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className=' bottom-3 right-6 z-40 fixed'>
                < AudioPlayer audio={audioone} borderColor="border-blue-text " iconColor="#05C4F9" styleInput="bg-blue-text accent-blue-text hover:bg-blue-text  hover:shadow-[inset_0_1px_10px_#106696] " styleBgInput='bg-blue-input' />
            </div>
        </div>
    );
};

export default Skills;
