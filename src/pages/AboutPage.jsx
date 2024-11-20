import Container from "@components/Container";
import GitHubIcon from "@components/icon/GitHubIcon";
import LinkedInIcon from "@components/icon/LinkedInIcon";
import TwitterIcon from "@components/icon/TwitterIcon";
import DirectorImg from "@pages/home/img/directorImg.webp";
import EditorImg from "@pages/home/img/editorImg.webp";
const data = [
    {
        position: 'Director',
        name: 'Aida Cave',
        img: DirectorImg,
        text: 'Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis. ',
        linkedInLink: 'https://www.bing.com/ck/a?!&&p=d3c27b13740bba1155de24aa79030ffa8912f5551c08dd46114872a06f36dce1JmltdHM9MTczMTExMDQwMA&ptn=3&ver=2&hsh=4&fclid=1c4f5003-1175-6c2f-34de-444210676d2e&psq=link&u=a1aHR0cHM6Ly93d3cubGlua2VkaW4uY29tLw&ntb=1',
        githubLink: 'https://github.com/CodeFlamesk',
        twitterLink: 'https://x.com/',
    },
    {
        position: 'Editor',
        name: 'Nick Carleton',
        img: EditorImg,
        text: 'Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis.  ',
        linkedInLink: 'https://www.bing.com/ck/a?!&&p=d3c27b13740bba1155de24aa79030ffa8912f5551c08dd46114872a06f36dce1JmltdHM9MTczMTExMDQwMA&ptn=3&ver=2&hsh=4&fclid=1c4f5003-1175-6c2f-34de-444210676d2e&psq=link&u=a1aHR0cHM6Ly93d3cubGlua2VkaW4uY29tLw&ntb=1',
        githubLink: 'https://github.com/CodeFlamesk',
        twitterLink: 'https://x.com/',
    },
]
const AboutPage = () => {
    return (
        <Container style='flex-col items-center sm:items-start' >
            <p className="heading1 mt-12 sm:mt-24 text-light-col">About</p>
            <p className="mt-10 text-[21px] font-semibold leading-[25px] text-center sm:text-start text-light-col">What, when and how?</p>
            <p className="heading4-regular text-icon-gray mt-6">Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque.
                Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis. Curabitur ultricies ex ante, eu placerat ipsum hendrerit ut. </p>
            <p className="heading2 text-light-col mt-10" >Team members</p>
          <div className="flex flex-col gap-10 pt-6">
          {
                data.map((item) => {
                    return (
                        <AboutItem key={item.key} {...item} />
                    )
                })
            }
          </div>
            

        </Container>

    );
};
export default AboutPage;


const AboutItem = ({ img, position, name, twitterLink, githubLink, linkedInLink, text }) => {
    return (
        <div className="flex flex-col sm:flex-row gap-4" >
            <div className="w-[300px] h-[300px] min-w-[300px] min-h-[300px] overflow-hidden rounded ">
                <img src={img} alt={name} width='300' height='300' className="hover:scale-110 transition-all object-cover w-full h-full duration-300 ease-in-out" />
            </div> 
            <div className=" sm:w-full w-[300px]">
            <p className="pt-4  heading3 text-purple uppercase tracking-[1.92px] ">{position}</p>
            <p  className="pt-2  heading3 text-light-col">{name}</p>
            <p className=" font-normal text-lg leading-[25px] text-icon-gray pt-4  ">{text}</p>
            <div className="flex  gap-4 pt-10">
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
          
        </div>
    );
};
