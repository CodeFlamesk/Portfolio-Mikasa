import GitHubIcon from "@components/icon/GitHubIcon";
import LinkedInIcon from "@components/icon/LinkedInIcon";
import TwitterIcon from "@components/icon/TwitterIcon";
import DirectorImg from "@pages/home/img/directorImg.webp";
import EditorImg from "@pages/home/img/editorImg.webp";
import { Link } from "react-router-dom";
const data = [
    {
        img: DirectorImg,
        position: 'director',
        name: 'Aida Cave',
        linkedInLink: 'https://www.bing.com/ck/a?!&&p=d3c27b13740bba1155de24aa79030ffa8912f5551c08dd46114872a06f36dce1JmltdHM9MTczMTExMDQwMA&ptn=3&ver=2&hsh=4&fclid=1c4f5003-1175-6c2f-34de-444210676d2e&psq=link&u=a1aHR0cHM6Ly93d3cubGlua2VkaW4uY29tLw&ntb=1',
        githubLink: 'https://github.com/CodeFlamesk',
        twitterLink: 'https://x.com/',

    },
    {
        img: EditorImg,
        position: 'Editor',
        name: 'Nick Carleton',
        linkedInLink: 'https://www.bing.com/ck/a?!&&p=d3c27b13740bba1155de24aa79030ffa8912f5551c08dd46114872a06f36dce1JmltdHM9MTczMTExMDQwMA&ptn=3&ver=2&hsh=4&fclid=1c4f5003-1175-6c2f-34de-444210676d2e&psq=link&u=a1aHR0cHM6Ly93d3cubGlua2VkaW4uY29tLw&ntb=1',
        githubLink: 'https://github.com/CodeFlamesk',
        twitterLink: 'https://x.com/',

    }
]
const TeamCard = () => {

    return (


        <div className="flex flex-col pt-16 ">
            <p className="heading1 text-light-col">Team</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-[70px] pt-[25px]  ">
                {
                    data.map((item) => {
                        return (
                            <TeamCardItem key={item.key} {...item} />
                        )
                    })
                }
            </div>
        </div>
    )
};

const TeamCardItem = ({ img, position, name, twitterLink, githubLink, linkedInLink }) => {
    return (
        <div className="flex flex-col bg-gray rounded pb-5" >
            <Link to='/about' className="w-300 h-300 overflow-hidden  rounded-t ">
                <img src={img} alt="img-team" width='300' height='300' className="hover:scale-110 transition-all object-cover w-full h-full duration-300 ease-in-out" />
            </Link>
            <p className="pt-4 pl-4 heading3 text-purple uppercase tracking-[1.92px] ">{position}</p>
            <Link to='/about' className="pt-2 pl-4 heading3 max-w-max hover:text-purple duration-300 transition-colors ease-in-out text-light-col">{name}</Link>
            <div className="flex pl-4 gap-4 pt-10">
                <a href={linkedInLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-icon-gray hover:text-linkedIn w-[18px] h-[18px] hover:scale-125 duration-300">
                    <LinkedInIcon />
                </a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-icon-gray hover:text-black w-[18px] h-[18px] hover:scale-125 duration-300">
                    <GitHubIcon />
                </a>
                <a href={twitterLink} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-icon-gray hover:text-twitter w-[18px] h-[18px] hover:scale-125 duration-300">
                    <TwitterIcon />
                </a>
            </div>
        </div>
    );
};
export default TeamCard;
