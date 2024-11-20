import FacebookIcon from "@components/icon/FacebookIcon";
import GitHubIcon from "@components/icon/GitHubIcon";
import TwitterIcon from "@components/icon/TwitterIcon";
const LinkFacGitTwit = ({styles}) => {
    return(
        <div className={`flex  gap-6 justify-center items-start  ${styles} `}>
        <a href='https://www.upwork.com/freelancers/~01a687c8f95b7913d7' target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-icon-gray hover:text-facebook pt-[1px] hover:scale-125 duration-300">
            <FacebookIcon />
        </a>
        <a href='https://www.upwork.com/freelancers/~01a687c8f95b7913d7' target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-icon-gray hover:text-black hover:scale-125 duration-300 ">
            <GitHubIcon width="18" height="18" />
        </a>
        <a href='https://www.upwork.com/freelancers/~01a687c8f95b7913d7' target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-icon-gray hover:text-twitter hover:scale-125 duration-300">
            <TwitterIcon width="17.65" height="15" />
        </a>
    </div>
    );
};
export default LinkFacGitTwit;