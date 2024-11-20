import Container from "@components/Container";
import EpisodeBlock from "./home/EpisodeBlock";

import ArrowRightTranscript from "@components/icon/ArrowRightTranscript";
import LinkFacGitTwit from "@components/LinkFacGitTwit";
import LatestPost from "./home/LatestPost";
import FormComments from "@components/Function/FormComments";
import Comments from "@components/Function/Comments";
import PianoAudio from "@components/Player/audio/pianoOctober.mp3";
import { useState } from "react";
const EpisodeSinglePage = () => {
    const [transcript, setTranscript] = useState(false);
    const toggleOpenTranscript = () => {
        setTranscript(prevState => !prevState);
    };
    return (
        <Container style='flex-col items-center'>
            <EpisodeBlock audio={PianoAudio} />
            <p className=" heading4-regular text-icon-gray pt-16 md:pt-24 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis augue. Cras suscipit sit amet est in aliquam. In vel blandit nunc. Donec at dolor in orci tristique bibendum.
            </p>
            <p className="text-light-col heading2 pt-10">Makemeup Podcast Theme </p>
            <p className="heading4-regular pt-6 text-icon-gray ">
                <p>Vivamus et aliquet neque. Mauris feugiat blandit augue a vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam a luctus magna, a finibus massa.</p>
                Proin ultricies, arcu ac dignissim sollicitudin, nibh nibh fermentum eros, id consequat nisi odio vestibulum tortor. Cras non interdum ligula, sit amet imperdiet purus. Vestibulum quis leo nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam a luctus magna, a finibus massa.
            </p>
            <div className="mt-12 border border-br-gray w-full ">
                <div onClick={toggleOpenTranscript} className="flex cursor-pointer hover:bg-br-gray  p-6 gap-[10px] items-center duration-300 transition-colors ease-in-out ">
                    <p className="heading2 text-light-col">Listening time: 86 minutes  |  View transcript</p>
                    <ArrowRightTranscript />
                </div>
                {transcript && <div className="heading4-regular text-icon-gray border-t p-6 border-br-gray h-full max-h-[430px] overflow-y-auto">
                    <p>Per Axbom</p>
                    <p>Hello, I’m Per Axbom.</p>
                    <p className="pt-[18px]">James Royal-Lawson</p>
                    <p>And I’m James Royal-Lawson.</p>
                    <p className="pt-[18px]">Per Axbom</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula dolor at magna auctor, eget dictum purus bibendum.</p>
                    <p>Fusce sodales, nunc a accumsan dignissim, velit lorem pellentesque lacus, ut luctus velit felis sit amet justo. Praesent non libero sapien.</p>
                    <p>Nulla facilisi. Quisque dictum orci at magna varius, nec fringilla ex bibendum. Sed euismod urna ac augue luctus posuere.</p>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis dapibus metus nec mi tincidunt viverra.</p>
                    <p>Integer facilisis, neque sed lacinia feugiat, felis metus dignissim elit, et pellentesque ipsum eros sed nulla. Etiam accumsan lacinia augue.</p>
                    <p>Ut vehicula eros id neque vehicula, ac pulvinar urna vehicula. Phasellus in sem vel orci ultricies malesuada nec a turpis.</p>
                    <p>Curabitur laoreet nisl ut enim sollicitudin, vitae dapibus sem tincidunt. Phasellus rhoncus risus at magna congue, nec tincidunt libero sagittis.</p>
                    <p>Aliquam tincidunt, ipsum quis vehicula consequat, purus nisi eleifend eros, sed dictum libero nulla id enim. Morbi volutpat lorem sit amet nulla tincidunt, non venenatis lorem feugiat.</p>
                    <p>Sed consequat lectus at eros venenatis malesuada. Integer vestibulum ligula eget libero dictum, sit amet bibendum ligula pharetra.</p>
                    <p>Donec tempor, libero at convallis suscipit, magna leo vestibulum purus, quis suscipit dolor odio sed sapien. Suspendisse fermentum nibh non orci sollicitudin viverra.</p>
                    <p>Phasellus at nisl vitae neque pellentesque vehicula. Vestibulum tristique orci a magna efficitur pharetra. Fusce tincidunt turpis a malesuada egestas.</p>
                    <p>Mauris nec mi nec arcu efficitur rhoncus. Suspendisse potenti. Proin elementum ipsum nec tortor ultricies, vitae ultricies nulla pharetra.</p>
                    <p>Praesent suscipit lorem non justo elementum fringilla. Aenean in risus et neque venenatis posuere. Integer id dui dictum, tincidunt enim in, porttitor purus.</p>
                    <p>Etiam at augue sed orci efficitur tempus. Nam pharetra ligula eget risus dignissim malesuada. Ut consectetur enim eget purus ultricies vehicula.</p>

                </div>}
            </div>
            <div className="flex gap-6 heading4-regular gap-y-3 pt-12 text-icon-gray flex-wrap w-full">
                <p>#Apple</p>
                <p>#Keynote</p>
                <p>#Product</p>

            </div>
            <div className="flex w-full items-center gap-6 py-10 border-y border-br-gray mt-6">
                <p>Share:</p>
                <LinkFacGitTwit />
            </div>
            <LatestPost styles='hidden ' />
            <div className="border-y border-br-gray py-12 mt-12 w-full ">
                <p className="heading4-regular text-light-col">Leave a Reply</p>
                <p className="heading5-regular text-gray-light">Required fields are marked*</p>
                <FormComments />
            </div>
            <Comments />
        </Container>

    );
};
export default EpisodeSinglePage;