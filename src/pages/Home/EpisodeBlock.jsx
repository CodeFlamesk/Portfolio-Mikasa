import AppleIcon from "@components/Player/icon/AppleIcon";
import SoundcloudIcon from "@components/Player/icon/SoundcloudIcon";
import SpotifyIcon from "@components/Player/icon/SpotifyIcon";

import AuthorImg from "@pages/home/img/authorImg.jpeg"
import PlayIcon from "@components/Player/icon/PlayIcon";
import { Link } from "react-router-dom";
import Player from "@components/Player/Player";
const EpisodeBlock = ({tytle , audio}) => {
    return (
        <div className="flex justify-center flex-col items-center adaptive-pt w-full">
            <img src={AuthorImg} alt="author-img" />
            <p className="pt-[39px] text-[26px] font-semibold leading-8 text-center">{tytle}</p>
           <Player audio={audio}/>
            <p className="pt-[46px] font-semibold text-xs tracking-[1.92px] uppercase ">Listen on</p>
            <div className="flex pt-3 gap-[30px] ">
                <div className="w-[30px]  cursor-pointer  text-center hover:scale-[1.18] duration-300 transition-all ease-in-out">
                    <SpotifyIcon />
                </div>
                <div className="w-10  cursor-pointer  text-center hover:scale-[1.18] duration-300 transition-all ease-in-ou">
                    <SoundcloudIcon />
                </div>
                <div className="w-[30px] cursor-pointer text-center hover:scale-[1.18] duration-300 transition-all ease-in-out">
                    <AppleIcon />
                </div>
            </div>
        </div>
    );
};
export default EpisodeBlock; 