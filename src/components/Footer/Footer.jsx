import BigArrowRightIcon from "@components/icon/BigArrowRightIcon";
import LinkFacGitTwit from "@components/LinkFacGitTwit";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="flex flex-col w-full pt-12 sm:pt-16 mt-12 sm:mt-16 border-t border-br-gray items-center">
            <div className="flex justify-between flex-col gap-y-8 gap-6 sm:flex-row w-full">
                <div className="flex flex-col text-icon-gray heading5-semibold gap-[9px] ">
                    <Link to='/episode' className="footer-hover ">Episodes</Link>
                    <Link to='/blog'  className="footer-hover">Blog</Link>
                    <Link to='/contact' className="footer-hover">Contact</Link>
                    <Link to='/donate' className="footer-hover">Donate</Link>
                </div>
                <div className="flex flex-col max-w-[315px] w-full">
                    <p className="text-light-col text-base font-semibold tracking-[2.56px] uppercase">Newsletter</p>
                    <p className="text-icon-gray text-xs font-normal pt-2">Sign up now,  get closer to our action.</p>

                    <form>
                        <label htmlFor="email" className="relative flex items-center max-w-[315px] w-full h-[42px] bg-gray mt-[14px] rounded overflow-hidden">
                            <input id="email" type="email" className="border-gray pl-[14px] pr-[50px] box-border border-[2px] inputs  input-shadow focus:outline-none  rounded  focus:ring-0 bg-gray w-full h-full placeholder:text-xs text-xs  placeholder:font-normal font-normal placeholder:text-icon-gray text-icon-gray " placeholder="Email  adress..." required />
                            <button type="submit" id="email" className="absolute right-[4px] top-[3px] flex justify-center items-center hover:bg-hov-purple transition-colors ease-in-out duration-300 bg-purple max-w-9 max-h-9 w-full h-full text-white rounded">
                                <BigArrowRightIcon />
                            </button>
                        </label>
                    </form>
                </div>
            </div>
            <Link to='/privacy-policy' className="text-center mt-16 sm:mt-[90px] max-w-max">PodcastTheme by VitaThemes | Privacy policy </Link>
          <LinkFacGitTwit styles='mb-[30px] md:mb-[46px] pt-6'/>
                  </div>
    );
};
export default Footer;