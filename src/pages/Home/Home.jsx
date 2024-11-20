import Container from "@components/Container";
import EpisodeBlock from "./EpisodeBlock";
import RecommendedCard from "./RecommendedCard";
import TeamCard from "./TeamCard";
import LatestPost from "./LatestPost";

import PianoAudio from '@components/Player/audio/piano.mp3';


const Home = () => {
    return (
        <>
            <Container style='justify-center flex-col items-center' >
                <EpisodeBlock tytle='How to rapidly test any experience!'audio={PianoAudio} />
                <RecommendedCard styles='pt-16 md:pt-24' exclude="first"/>
                <TeamCard />
                <LatestPost />
            </Container>




        </>
    )
}

export default Home;
