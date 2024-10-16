import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import VolumeSeting from "/public/img/volumeSeting";
import PauseIcon from "/public/img/pauseIcon";
import PlayIcon from "/public/img/playIcon";

const AudioPlayer = ({ audio, borderColor, iconColor, styleInput, styleBgInput }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const audioReff = useRef(null);
    const [showVolume, setShowVolume] = useState(false);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const hasShownModal = sessionStorage.getItem("hasShownModal");

        if (!hasShownModal) {
            setShowModal(true);
        } else {
            // Відновлення стану гучності з sessionStorage
            const savedVolume = sessionStorage.getItem("volume");
            if (savedVolume) {
                const parsedVolume = parseFloat(savedVolume);
                setVolume(parsedVolume);
                audioReff.current.volume = parsedVolume;
            }

            // Відновлення стану відтворення з sessionStorage
            const wasPlaying = sessionStorage.getItem("isPlaying") === 'true';
            setIsPlaying(wasPlaying);
            if (wasPlaying) {
                audioReff.current.play();
            }
        }
    }, []);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioReff.current.pause();
        } else {
            audioReff.current.play();
        }
        setIsPlaying(!isPlaying);
        sessionStorage.setItem("isPlaying", !isPlaying); // Зберігаємо стан відтворення
    };

    const changeVolume = (e) => {
        const newVolume = e.target.value;
        audioReff.current.volume = newVolume;
        setVolume(newVolume);
        sessionStorage.setItem("volume", newVolume); // Зберігаємо гучність в sessionStorage
    };

    const handleModalYes = () => {
        dispatch({ type: 'OPEN_MODAL' });
        sessionStorage.setItem("hasShownModal", "true");
        setShowModal(false);
        togglePlayPause();
    };

    const handleModalNo = () => {
        dispatch({ type: 'OPEN_MODAL' });
        sessionStorage.setItem("hasShownModal", "true");
        setShowModal(false);
        togglePlayPause();
    };

    return (
        <div className="flex gap-8">
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                        <h2>Do you want jaga jaga?</h2>
                        <div className="w-full flex justify-between">
                            <button onClick={handleModalYes}>Yes</button>
                            <button onClick={handleModalNo}>No</button>
                        </div>
                    </div>
                </div>
            )}

            <audio ref={audioReff} loop>
                <source src={audio} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            <label
                className={`flex items-center justify-center px-2 h-10 rounded-2xl transition-all duration-500 ease-in-out transform ${styleBgInput} ${showVolume ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px] pointer-events-none'}`}
            >
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={changeVolume}
                    className={`w-full h-2 rounded-lg cursor-pointer transition-all focus:outline-none ${styleInput}`}
                />
            </label>

            <button onClick={togglePlayPause} className="relative">
                <div className="z-10 mb-3 rounded-full">
                    {isPlaying ? <PauseIcon iconColor={iconColor} /> : <PlayIcon iconColor={iconColor} />}
                </div>
                {!showVolume && <div className={`play-btn-play ${borderColor}`}></div>}
            </button>

            <button onClick={() => setShowVolume(!showVolume)} className="relative flex flex-col-reverse h-[52px]">
                <div className="z-10 mb-3 rounded-full">
                    <VolumeSeting iconColor={iconColor} />
                </div>
                {!showVolume && <div className={`play-btn ${borderColor}`}></div>}
            </button>
        </div>
    );
};

export default AudioPlayer;
