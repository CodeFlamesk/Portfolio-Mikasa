import Container from "@components/Container";
import EpisodeBlock from "./home/EpisodeBlock";
import RecommendedCard from "./home/RecommendedCard";
import TeamCard from "./home/TeamCard";
import LatestPost from "./home/LatestPost";
import PianoAudio from "@components/Player/audio/pianoOctober.mp3";
const EpisodeThirdPage = () => {
    return (
        <>
            <Container style='justify-center flex-col items-center' >
                <EpisodeBlock tytle='Makemeup Podcast Theme; launch it now !' audio={PianoAudio}/>
                <RecommendedCard styles='pt-16 md:pt-24' exclude="third" />
                <TeamCard />
                <LatestPost />
            </Container>




        </>
    )
}

export default EpisodeThirdPage;
