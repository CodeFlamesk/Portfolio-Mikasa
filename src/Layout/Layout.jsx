import Header from "@components/Header/Header";
import AudioPlayer from "@components/Player/Player";
import { Outlet } from "react-router-dom";


const Layout = () => {



    return (
        <div >

            <main >
                <Outlet />
            </main>

        </div>
    )
}

export default Layout