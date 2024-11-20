import Container from "@components/Container";
import RecommendedCard from "./home/RecommendedCard";

const EpisodePage = () =>
{
    return(
<Container style='flex-col'>
    <p className="heading1 text-light-col pt-12 md:pt-24 ">Episodes</p>
    <RecommendedCard styles='pt-10'/>
</Container>
    );
};
export default EpisodePage;