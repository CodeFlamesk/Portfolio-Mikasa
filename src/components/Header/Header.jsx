import { Link } from "react-router-dom";
import ArrowDown from "./icon/ArrowDown";
import BurgerBtn from "./icon/BurderBtn";
import Like from "./icon/Like";
import { useState, useEffect, useRef } from "react";

const Header = () => {
    const [openSelect, setOpenSelect] = useState(false);
    const [openSelectNav, setOpenSelectNav] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const dropdownRef = useRef(null);

   

    const toggleOpenMenu = () => {
        setOpenMenu(prevState => !prevState);
    };

    useEffect(() => {
        if (openMenu) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [openMenu]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenSelect(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const toggleSelect = () => {
        setOpenSelect(prevState => !prevState);
    };
    const toggleSelectNav = () => {
        setOpenSelectNav(prevState => !prevState);
    };
    return (
        <div className="flex flex-col border-b border-br-gray">
            <div className="mx-auto max-w-[1140px] w-full justify-between h-[106px] pt-[39px] px-5 flex z-50">
                <Link to="/" className="text-light-col font-normal logo text-[19px] max-h-max">
                    CastPress.
                </Link>

                <div className="gap-[39px] text-3 font-semibold text-light-col tracking-[1.92px] items-start hidden sm:flex" >
                    <div className="flex items-center gap-2 relative" onClick={toggleSelect} ref={dropdownRef} >
                        <p className="uppercase cursor-pointer hover-header">Episodes</p>
                        <p className={`${openSelect ? 'rotate-180' : 'rotate-0'} duration-300 transition-all ease-in-out`}><ArrowDown /></p>
                        
                        {openSelect && (
                            <div className="flex flex-col border bg-white border-br-gray absolute p-4 min-w-[179px] top-[30px]"  >
                                <Link to="/episode/season">Season 1</Link>
                                <Link to="/episode/season">Season 2</Link>
                                <Link to="/episode/season">Season 3</Link>
                            </div>
                        )}
                    </div>
                    <Link to="/blog" className="uppercase hover-header">
                        Blog
                    </Link>
                    <Link to="/contact" className="uppercase hover-header">
                        Contact
                    </Link>
                    <div className="flex gap-1.5 items-center text-purple hover:text-light-col duration-300 transition-colors ease-in-out ">
                        <Like />
                        <Link to="/donate" className="uppercase">
                            Donate
                        </Link>
                    </div>
                </div>

                <button
                    aria-label="Main Menu"
                    className="w-[32px] transition-all h-[32px] duration-300 z-50 sm:hidden inline-block"
                    onClick={toggleOpenMenu}
                >
                     <BurgerBtn isOpen={openMenu} />
                </button>
            </div>

            <div
                className={`fixed inset-0 h-screen w-full flex gap-y-10 items-center z-10 flex-col pt-[100px] bg-white sm:hidden transition-all duration-500 ${
                    openMenu ? "opacity-100 translate-y-0 z-10" : "opacity-0 -translate-y-full"
                }`}
            >
                <div className="flex flex-col items-center" >
                    <div className="flex gap-x-2 items-center cursor-pointer" onClick={toggleSelectNav}  >
                        <p className="mob-nav hover-header">Episodes</p>
                        <p className={`${openSelectNav ? 'rotate-180' : 'rotate-0'} duration-300 transition-all ease-in-out`}><ArrowDown /></p>
                    </div>

                    <div 
                        className={`flex flex-col gap-4 transition-all duration-300 ease-in-out ${
                            openSelectNav
                                ? "opacity-100 max-h-max translate-y-0 z-10"
                                : "opacity-0 max-h-0 -translate-y-4"
                        }`}
                        style={{ overflow: "hidden" }}
                    >
                        <Link onClick={toggleOpenMenu} to="/episode/season " className="episodes-link pt-6">
                            Season 1
                        </Link>
                        <Link onClick={toggleOpenMenu} to="/episode/season" className="episodes-link ">
                            Season 2
                        </Link>
                        <Link onClick={toggleOpenMenu} to="/episode/season" className="episodes-link ">
                            Season 3
                        </Link>
                    </div>
                </div>

                <Link onClick={toggleOpenMenu} to="/blog" className="mob-nav hover-header">
                    Blog
                </Link>

                <Link onClick={toggleOpenMenu} to="/contact" className="mob-nav hover-header">
                    Contact
                </Link>
                <div className="flex gap-1.5 items-center hover-header ">
                    <Like />
                    <Link onClick={toggleOpenMenu} to="/donate" className="mob-nav hover-header">
                        Donate
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
