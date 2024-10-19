import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import VolumeSeting from "/public/img/volumeSeting";
import PauseIcon from "/public/img/pauseIcon";
import PlayIcon from "/public/img/playIcon";

const AudioPlayer = ({ audio, borderColor, iconColor, styleInput, styleBgInput }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const audioRef = useRef(null);
    const [showVolume, setShowVolume] = useState(false);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const hasShownModal = localStorage.getItem("hasShownModal");

        if (!hasShownModal) {
            setShowModal(true);
        } else {
            const savedVolume = localStorage.getItem("volume");
            if (savedVolume) {
                const parsedVolume = parseFloat(savedVolume);
                setVolume(parsedVolume);
                if (audioRef.current) {
                    audioRef.current.volume = parsedVolume;
                }
            }

            const wasPlaying = localStorage.getItem("isPlaying") === 'true';
            setIsPlaying(wasPlaying);
            if (wasPlaying && audioRef.current) {
                audioRef.current.play();
            }
        }
    }, []);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
        localStorage.setItem("isPlaying", !isPlaying);
    };

    const changeVolume = (e) => {
        const newVolume = e.target.value;
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
        setVolume(newVolume);
        localStorage.setItem("volume", newVolume);
    };

    const handleModalYes = () => {
        dispatch({ type: 'OPEN_MODAL' });
        localStorage.setItem("hasShownModal", "true");
        setShowModal(false);
        togglePlayPause();
    };

    const handleModalNo = () => {
        dispatch({ type: 'NO_MODAL' });
        localStorage.setItem("hasShownModal", "true");
        setShowModal(false);
        setIsPlaying(false);
    };

    return (
        <div className="flex gap-8">
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                    <div className="flex mx-10 flex-col max-w-[600px] font-bold text-xl bg-pink text-viber-bg rounded-lg shadow-lg p-4">
                        <p className="text-3xl">Notification</p>
                        <h2 className="pt-4">Would you like to immerse yourself in the atmosphere of this site with the sounds of music?</h2>
                        <div className="w-full flex justify-end gap-4 pt-4">
                            <button type="button" onClick={handleModalYes} className="bg-viber-bg text-white h-10 w-20 rounded-lg border-2 border-viber-bg hover:border-purple hover:text-viber-bg hover:bg-opacity-10 transition-all">Yes</button>
                            <button type="button" onClick={handleModalNo} className="bg-viber-bg text-white h-10 w-20 rounded-lg border-2 border-viber-bg hover:border-purple hover:text-viber-bg hover:bg-opacity-10 transition-all">No</button>
                        </div>
                    </div>
                </div>
            )}

            <audio ref={audioRef} loop>
                <source src={audio} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            <label
                className={`flex items-center justify-center px-2 h-10 rounded-2xl transition-all duration-500 ease-in-out transform ${styleBgInput} ${showVolume ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px] pointer-events-none'}`}
                htmlFor="volume-control"
            >
                <input
                    id="volume-control"
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={changeVolume}
                    className={`w-full h-2 rounded-lg cursor-pointer transition-all focus:outline-none ${styleInput}`}
                />
            </label>

            <button type="button" onClick={togglePlayPause} className="relative" aria-label="Play/Pause">
                <div className="z-10 mb-3 rounded-full">
                    {isPlaying ? <PauseIcon alt='Pause' iconColor={iconColor} /> : <PlayIcon alt='Play' iconColor={iconColor} />}
                </div>
                {!showVolume && <div className={`play-btn-play ${borderColor}`}></div>}
            </button>

            <button type="button" aria-label="Setting the volume" onClick={() => setShowVolume(!showVolume)} className="relative flex flex-col-reverse h-[52px]">
                <div className="z-10 mb-3 rounded-full">
                    <VolumeSeting iconColor={iconColor} />
                </div>
                {!showVolume && <div className={`play-btn ${borderColor}`}></div>}
            </button>
        </div>
    );
};

export default AudioPlayer;
