import Container from "@components/Container";
import EpisodeBlock from "./home/EpisodeBlock";
import RecommendedCard from "./home/RecommendedCard";
import TeamCard from "./home/TeamCard";
import LatestPost from "./home/LatestPost";
import PianoAudio from "@components/Player/audio/pianoSleep.mp3";
const EpisodeSecondPage = () => {
    return (
        <>
            <Container style='justify-center flex-col items-center' >
                <EpisodeBlock tytle='Everything you need to know about mind mapping creation' audio={PianoAudio}/>
                <RecommendedCard styles='pt-16 md:pt-24' exclude="second" />
                <TeamCard />
                <LatestPost />
            </Container>




        </>
    )
}

export default EpisodeSecondPage;
