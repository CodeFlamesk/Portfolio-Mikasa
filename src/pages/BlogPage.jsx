
import Container from '@components/Container';
import CakePostImg from '@pages/home/img/postCakeImg.webp'
import PaginationFunction from '@components/Pagination/PaginationFunction';
import ClockPostImg from '@pages/home/img/postClockImg.webp'
import HeadphonesPostImg from '@pages/home/img/postHeadphonesImg.webp'
import { Link } from 'react-router-dom';
const data = [
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

    },
    {
        img: CakePostImg,
        tytle: 'How to create your own podcast cover art?',
        date: 'Dec 4, 2019',
        link: '/blog-health-page',
    },
   
    {
        img: CakePostImg,
        tytle: 'How to create your own podcast cover art?',
        date: 'Dec 4, 2019',
        link: '/blog-health-page',
    },
    {
       img: HeadphonesPostImg,
        tytle: 'How to create your own podcast cover art?',
        date: 'Dec 4, 2019',
        link: '/blog-create-art',

    },
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

    },
    {
           img: ClockPostImg,
        tytle: 'How to create your own podcast cover art?',
        date: 'Dec 4, 2019',
        link: '/blog-time-page',
    },
    {
        img: CakePostImg,
        tytle: 'How to create your own podcast cover art?',
        date: 'Dec 4, 2019',
        link: '/blog-health-page',
    },
    {
       img: HeadphonesPostImg,
        tytle: 'How to create your own podcast cover art?',
        date: 'Dec 4, 2019',
        link: '/blog-create-art',

    },
    {
        img: CakePostImg,
        tytle: 'How to create your own podcast cover art?',
        date: 'Dec 4, 2019',
        link: '/blog-health-page',
    },
    {
       img: HeadphonesPostImg,
        tytle: 'How to create your own podcast cover art?',
        date: 'Dec 4, 2019',
        link: '/blog-create-art',

    },
    {
           img: ClockPostImg,
        tytle: 'How to create your own podcast cover art?',
        date: 'Dec 4, 2019',
        link: '/blog-time-page',
    },
    {
        img: CakePostImg,
        tytle: 'How to create your own podcast cover art?',
        date: 'Dec 4, 2019',
        link: '/blog-health-page',
    }
   
]
const BlogPage = () => {
    return (
        <Container>
        <div className="flex flex-col pt-12 md:pt-24 w-full">
            <p className="heading1 text-light-col justify-center flex sm:justify-start">Blog</p>
            <div className="flex flex-col pt-[25px] gap-10 md:gap-6 ">
                            <PaginationFunction
                            itemsPerPage={3}
                            data={data}
                            title='Courses'
                            showValue1='3'
                            showValue2='6'
                            showValue3='9'
                            stylesRender="flex flex-col pt-[25px] gap-10 md:gap-6 "
                            renderItem={(item, index) => (

                                <BlogPageItem
                                    key={item.title + index}
                                    {...item}
                                />
                            )}
                        />
                                     </div>
                   </div>
        </Container>
    );
};

const BlogPageItem = ({ img, tytle, date, link }) => {
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
export default BlogPage;