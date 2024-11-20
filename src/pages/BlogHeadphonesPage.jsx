import Container from '@components/Container';
import LinkFacGitTwit from '@components/LinkFacGitTwit';
import CakePostImg from '@pages/home/img/postCakeImg.webp'
import FormComments from '@components/Function/FormComments';
import Comments from '@components/Function/Comments';
import ClockPostImg from '@pages/home/img/postClockImg.webp'
import HeadphonesPostImg from '@pages/home/img/postHeadphonesImg.webp'
import { Link } from 'react-router-dom';
const dataPost = [
    {
        img: CakePostImg,
        tytle: 'How to create your own podcast cover art?',
        date: 'Dec 4, 2019',
        link: '/blog-health-page',
    },
    {
        img: ClockPostImg,
        tytle: 'How to create your own podcast cover art?',
        date: 'Dec 4, 2019',
        link: '/blog-time-page',
    }
]
const BlogHeadphonesPage = () => {
    return (
        <Container style='flex flex-col ' >
            <div className='flex flex-col items-center w-full mt-12 md:mt-24  '>
                <img src={HeadphonesPostImg} alt="Headphones" className='w-[180px] h-[180px] ' />
                <p className="pt-10 heading1 text-light-col text-center ">How to create your own podcast cover art?</p>
                <p className="pt-4 "> jan 21, 2024  |  By VitaThemes</p>
            </div>

            <p className=" heading4-regular text-icon-gray pt-16 md:pt-24 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis augue. Cras suscipit sit amet est in aliquam. In vel blandit nunc. Donec at dolor in orci tristique bibendum.
            </p>
            <p className="text-light-col heading2 pt-10">Makemeup Podcast Theme </p>
            <p className="heading4-regular pt-6 text-icon-gray ">
                <p>Vivamus et aliquet neque. Mauris feugiat blandit augue a vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam a luctus magna, a finibus massa.</p>
                Proin ultricies, arcu ac dignissim sollicitudin, nibh nibh fermentum eros, id consequat nisi odio vestibulum tortor. Cras non interdum ligula, sit amet imperdiet purus. Vestibulum quis leo nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam a luctus magna, a finibus massa.
            </p>

            <div className="flex gap-6 heading4-regular gap-y-3 pt-12 text-icon-gray flex-wrap w-full">
                <p>#Apple</p>
                <p>#Keynote</p>
                <p>#Product</p>

            </div>
            <div className="flex w-full items-center gap-6 py-10 border-y border-br-gray mt-6">
                <p>Share:</p>
                <LinkFacGitTwit />
            </div>




            <div className="flex flex-col pt-16 w-full">
                <p className="heading1 text-light-col justify-center flex sm:justify-start">Latest Posts</p>
                <div className="flex flex-col pt-[25px] gap-10 md:gap-6 ">
                    {
                        dataPost.map((item) => {
                            return (
                                <PostItem key={item.key} {...item} />
                            )
                        })
                    }
                </div>
            </div>


            <div className="border-y border-br-gray py-12 mt-12 w-full ">
                <p className="heading4-regular text-light-col">Leave a Reply</p>
                <p className="heading5-regular text-gray-light">Required fields are marked*</p>
                <FormComments />
            </div>
            <Comments />
        </Container>
    );
};
export default BlogHeadphonesPage;


const PostItem = ({ img, tytle, date, link }) => {
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
