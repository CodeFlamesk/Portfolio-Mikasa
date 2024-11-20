import PlaySmallIcon from "./icon/PlaySmallIcon";

const PlayerRecomendedCard = () => {
    return (
        <div className="  flex gap-[9px] mt-4 group cursor-pointer max-w-max select-none ">
            <div className="bg-purple items-center p-2 w-6 h-6 rounded-full transition-colors ease-in-out duration-300 group-hover:bg-hov-purple">
                <PlaySmallIcon />
            </div>
            <p className="heading6 uppercase text-purple transition-colors duration-300 ease-in-out group-hover:text-hov-purple">
                listen now
            </p>
        </div>

    );
};
export default PlayerRecomendedCard; 