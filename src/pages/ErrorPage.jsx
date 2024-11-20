import ArrowRightIcon from "@components/icon/ArrowRightIcon";
import { Link } from "react-router-dom";




const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center ">
            <p className="text-light-col text-center text-[144px] font-semibold pt-12 md:pt-24 ">404</p>
            <p className="text-light-col text-center text-[26px] pt-[21px] hidden md:block">Page not found!</p>
            <p className="text-icon-gray text-center text-base leading-[25px] pt-[19px] ">This page not found (deleted or never exists).</p>
            <p className="text-icon-gray text-center text-base leading-[25px] ">Try a phrase in search box or back to home and start again.</p>

            <Link to="/" className="flex gap-2 max-w-max rounded mt-[22px] items-center justify-center text-sm text-white  bg-purple py-[11px] px-[22px]  ">
                <p className="heading5-regular ">HOMEPAGE</p>
                <ArrowRightIcon />
            </Link>


        </div>

    );
};
export default ErrorPage;