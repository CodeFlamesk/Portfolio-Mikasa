import ArrowRightIcon from "@components/icon/ArrowRightIcon";
import CheckBox from "@components/ui/CheckBox";

const FormComments = () => {
    return (
        <form className="flex flex-col mt-[35px] w-full max-w-[670px] items-start justify-start">
            <label className="text-icon-gray heading4-regular mb-1" >Comment</label>
            <textarea type="text" className="max-h-[300px] input-style mt-1  min-h-[150px]  py-[14px]  w-full " required />
            <label className="mt-[28px] text-icon-gray heading4-regular" >Name*</label>
            <input type="text" className="input-style input-shadow" required />
            <label className="mt-[28px] text-icon-gray heading4-regular mb-1">Email*</label>
            <input type="email" className="inputs  border h-[42px] px-[14px]  text-sm font-normal  text-icon-gray  input-shadow focus:outline-none  rounded   border-gray w-full bg-gray" placeholder="Email  adress..." required />
            <label className="mt-[28px] text-icon-gray heading4-regular mb-1">Website*</label>
            <input type="text" className="input-style input-shadow" />
            <CheckBox customStyles='pt-8 '>
                <p className="flex pt-[3px]  text-xs font-normal text-icon-gray ">Save my name, email, and website in this browser for the next time I comment</p>
            </CheckBox>
            <button type="submit" className='flex gap-2 rounded transition-all duration-300 ease-in-out  px-4 py-2 items-center bg-purple text-white hover:bg-gray hover:text-purple heading5-regular justify-center cursor-pointer max-w-max mt-10  ' >
                <p>Submit</p>
                <ArrowRightIcon />
            </button>
        </form>
    );
};
export default FormComments;