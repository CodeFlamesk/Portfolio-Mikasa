import React, { useEffect } from 'react';

const Home = () => {
    useEffect(() => {

        const script = document.createElement('script');
        script.src = "https://unpkg.com/@esotericsoftware/spine-player@4.1.*/dist/iife/spine-player.js";



        script.async = true;

        script.onload = () => {

            const player = new window.spine.SpinePlayer('spine-container', {
                jsonUrl: `/img/skeleton.json`,
                atlasUrl: `/img/main_tree.atlas`,
                animation: 'animation',
                alpha: true,
                loop: true,
                autoplay: true,
                scale: 1.0,
            });

        };

        document.body.appendChild(script);


        return () => {
            if (script) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <>

            <div id="spine-container" className='bg-purple w-full h-full' ></div>

        </>
    );
};

export default Home;
