import ReplyIcon from "@components/icon/ReplyIcon";
import DirectorImg from "@pages/home/img/directorImg.webp";
import EditorImg from "@pages/home/img/editorImg.webp";

const data = [
    {
        img: EditorImg,
        name: 'Mark Newman',
        data: 'October 24.2024',
        commentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Aenean placerat. ',
        reply: true,
        replyImg: DirectorImg,
         replyName: 'Scarlet Withch',
         replyData: 'October 26.2024',
         replyCommentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Aenean placerat. ',

    },

    {
        img: EditorImg,
        name: 'Mark Newman',
        data: 'October 24.2024',
        commentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Aenean placerat. ',
        reply: false
    }
]





const Comments = () => {

    return (
        <div className="flex flex-col w-full pt-[68px]">
            <p className=" heading4-regular text-light-col ">Comments</p>
            <div className="flex  flex-col gap-10 pt-5 md:pt-[34px]">
            {
                data.map((item) => {
                    return (
                        <CommentsItem key={item.key} {...item} />
                    )
                })
            }
            </div>
         

        </div>
    )
};




const CommentsItem = ({ img, name, data, commentText, reply,  replyImg,  replyName,  replyData ,  replyCommentText}) => {
    return (
        <div className={`flex ${reply &&  ' border-b border-br-gray   pb-10' }`}>
            <div className="min-w-[50px] w-[50px] h-[50px] overflow-hidden rounded">
                <img src={img} alt={name} className="object-cover w-full h-full " />
            </div>
            <div className="flex flex-col pl-6">
                <div className="flex flex-col gap-y-1 md:flex-row gap-4 heading5-regular">
                    <p className="text-icon-gray capitalize">{name}</p>
                    <p className="text-gray-light">{data}</p>
                </div>
                <p className="pt-3 heading4-regular text-icon-gray ">{commentText}</p>
                <div className=" flex gap-3 pt-4 items-center pointer heading5-regular text-gray-light ">
                    <ReplyIcon />
                    <p>Reply</p>
                </div>
                {reply && (
                    <div className="flex pt-10 w-full ">
                        <div className="min-w-[50px] w-[50px] h-[50px] overflow-hidden rounded">
                            <img src={replyImg} alt={replyName} className="object-cover w-full h-full " />
                        </div>
                        <div className="flex flex-col pl-6">
                            <div className="flex flex-col gap-y-1 md:flex-row gap-4 heading5-regular">
                                <p className="text-icon-gray capitalize">{replyName}</p>
                                <p className="text-gray-light">{replyData}</p>
                            </div>
                            <p className="pt-3 heading4-regular text-icon-gray ">{replyCommentText}</p>
                            <div className=" flex gap-3 pt-4 items-center pointer heading5-regular text-gray-light ">
                                <ReplyIcon />
                                <p>Reply</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};
export default Comments