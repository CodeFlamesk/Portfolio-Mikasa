



const Home = () => {
    const anim = lottie


    anim.loadAnimation({
        container: document.querySelector('#lottie-test'),
        renderer: 'canvas',
        loop: true,
        autoplay: true,
        path: './skeleton.json'
    });

    return (
        <>
            <div id="lottie-test">Lottie</div>
            <img src="/img/Fone2.jpg" alt="3" className="w-full h-full cobject-cover " />






        </>
    )
}

export default Home;