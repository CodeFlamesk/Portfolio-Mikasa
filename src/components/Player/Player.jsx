import VolumeSeting from "/public/img/volumeSeting";
import PauseIcon from "/public/img/pauseIcon";
import PlayIcon from "/public/img/playIcon";
import { useState, useRef } from "react";
import japanAudio from './music/japan.mp3';
const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const audioReff = useRef(null);
    const [showVolume, setShowVolume] = useState(false)
    const togglePlayPause = () => {
        if (isPlaying) {
            audioReff.current.pause();
        }
        else {
            audioReff.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    const changeVolume = (e) => {
        const newVolume = e.target.value;
        audioReff.current.volume = newVolume;
        setVolume(newVolume);
    };
    return (
        <div>
            <audio ref={audioReff} loop>
                <source src={japanAudio} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <div className="controls">
                <button onClick={togglePlayPause} >

                    <div className="z-10 absolute right-24 bottom-[-40px] md:bottom-4 rounded-full  ">{isPlaying ? <PauseIcon /> : <PlayIcon />}</div>
                    {!showVolume && (<div className="play-btn-play"></div>)}

                </button>
                <button onClick={() => setShowVolume(!showVolume)} >
                    <div className="z-10 absolute right-6 bottom-[-40px] md:bottom-4 rounded-full">
                        <VolumeSeting />
                    </div>

                    {showVolume ? (
                        <div className={`flex items-center justify-center mb-20 mr-3 bg-purple px-2 py-3 rounded-2xl transition-all duration-500 ease-in-out transform ${showVolume ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-20px]'
                            }`}>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.1"
                                value={volume}
                                onChange={changeVolume}
                                className="opacity-100 w-full h-2 bg-purple rounded-lg cursor-pointer accent-pink hover:bg-pink transition-all focus:outline-none hover:shadow-[inset_0_1px_10px_#9b5de5]"
                            />
                        </div>
                    ) : (
                        <div className="play-btn"></div>
                    )}

                </button>


            </div>

        </div>
    );
};
export default AudioPlayer;