import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({ colorIcon = "black", colorMenu = "purple" }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col items-end">

            <button
                className={`menu ${isOpen ? 'opened' : ''}`}
                onClick={toggleMenu}
                aria-label="Main Menu"
                aria-expanded={isOpen}
            >
                <svg width="60" height="60" viewBox="0 0 100 100">
                    <path
                        className={`line line1 ${colorIcon}`}
                        d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                    />
                    <path
                        className={`line line2 ${colorIcon}`}
                        d="M 20,50 H 80"
                    />
                    <path
                        className={`line line3 ${colorIcon}`}
                        d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                    />
                </svg>
            </button>


            <div className={`duration-300 ease-in-out transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                <ul className="flex flex-col gap-4 items-center justify-center mr-2">
                    <li className="pt-10 ">
                        <Link to='/' className={`menu-link ${colorMenu}`}>Home</Link>
                    </li>
                    <li className="py-2">
                        <Link to='/home/about' className={`menu-link ${colorMenu}`}>About</Link>
                    </li>
                    <li className="py-2">
                        <Link to='/home/skills' className={`menu-link ${colorMenu}`}>Skills</Link>
                    </li>
                    <li className="py-2">
                        <Link to='/home/projects' className={`menu-link ${colorMenu}`}>Project</Link>
                    </li>
                    <li className="py-2">
                        <Link to='/home/contact' className={`menu-link ${colorMenu}`}>Contact</Link>
                    </li>
                </ul>
            </div>



        </div>
    );
};

export default Menu;
