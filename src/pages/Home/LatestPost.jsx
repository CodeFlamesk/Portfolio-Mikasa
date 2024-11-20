
import ArrowRightIcon from '@components/icon/ArrowRightIcon';
import ClockPostImg from '@pages/home/img/postClockImg.webp'
import HeadphonesPostImg from '@pages/home/img/postHeadphonesImg.webp'
import { Link } from 'react-router-dom';


const dataPost = [
    {
        img: ClockPostImg,
        tytle: 'How to create your own podcast cover art?',
        date: 'Dec 4, 2019',
        link: '/blog-time-page',
    },
    {
        img: HeadphonesPostImg,
        tytle: 'How to create your own podcast cover art?',
        date: 'Dec 4, 2019',
        link: '/blog-create-art',
    }
]
const LatestPost = ({styles}) => {
    return (
        <div className="flex flex-col pt-16 w-full">
            <p className="heading1 text-light-col justify-center flex sm:justify-start">Latest Posts</p>
            <div className="flex flex-col pt-[25px] gap-10 md:gap-6 ">
                {
                    dataPost.map((item) => {
                        return (
                            <LatestPostItem key={item.key} {...item} />
                        )
                    })
                }
            </div>
            <Link to='/blog' className={`flex gap-2 rounded transition-all duration-300 ease-in-out  px-4 py-2 items-center bg-gray text-purple heading5-regular justify-center cursor-pointer max-w-max mt-10 hover:bg-purple hover:text-white ${styles} `} >
                <p>View Blog</p>
                <ArrowRightIcon />
            </Link>
        </div>
    );
};

const LatestPostItem = ({ img, tytle, date, link }) => {
    return (

        <div className="flex flex-col sm:flex-row gap-x-10 gap-y-4 w-full items-center">
            <div className='w-[180px] h-[180px] overflow-hidden rounded  '>
                <img src={img} alt="post-img" className='object-cover hover:scale-110 transition-all  duration-300 ease-in-out w-full h-full' />
            </div>
            <div className='flex flex-col '>
                <p className='heading2 text-light-col text-center sm:text-start'>{tytle}</p>
                <p className='flex sm:justify-start justify-center pt-4 heading5-regular text-gray-light'>{date}</p>
                <p className=' flex sm:justify-start text-center justify-center mt-10 heading5-semibold text-purple hover:text-hov-purple  '>
                    <Link to={link} className='cursor-pointer'>Read More</Link>
                </p>
            </div>
        </div>


    );
};
export default LatestPost;