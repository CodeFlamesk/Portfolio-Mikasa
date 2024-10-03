import React, { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        // Динамічне завантаження скрипту Spine Player
        const script = document.createElement('script');
        script.src = "https://esotericsoftware.com/files/spine-player/4.1/spine-player.js";
        script.async = true;

        script.onload = () => {
            console.log('Spine Player loaded'); // Для перевірки завантаження скрипту
            const player = new window.spine.SpinePlayer('spine-container', {
                jsonUrl: `${process.env.PUBLIC_URL}/img/skeleton.json`,
                atlasUrl: `${process.env.PUBLIC_URL}/img/main_tree.atlas`,
                animation: 'run',
                alpha: true,
                loop: true,
                autoplay: true,
                scale: 1.0,
            });

        };

        document.body.appendChild(script);

        // Очищення при демонтажі компонента
        return () => {
            if (script) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <>
            <p>Edeko</p>
            <div id="spine-container" style={{ width: '100vw', height: '100vh' }}></div>

        </>
    );
};

export default Home;
