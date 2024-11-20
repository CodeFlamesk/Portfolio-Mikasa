import Container from "@components/Container";
import ArrowRightIcon from "@components/icon/ArrowRightIcon";
import { Link } from "react-router-dom";

const DonatePage = () => {
    return (
        <Container>
            <div className="flex flex-col w-full pt-12 md:pt-24">
                <p className="heading1 text-light-col ">Support CastPress</p>
                <p className="heading4-regular text-icon-gray mt-10">Help us continue to break down silos and spread knowledge through CastPress.
                    By being funded, with your valuable donations, we can continue to bring you podcast content that is fresh, relevant and helps you grow.</p>
           
            <Link to="/error-404" className="flex gap-2 max-w-max rounded mt-10 items-center justify-center text-sm text-white  bg-purple py-[11px] px-[22px]  ">
                <p className="heading5-regular ">Donate Now</p>
                <ArrowRightIcon />
            </Link>
            </div>
        </Container>
    )
}
export default DonatePage;