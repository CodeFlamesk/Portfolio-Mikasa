import Container from "@components/Container";
import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import { Outlet } from "react-router-dom";


const Layout = () => {



    return (
        <div >
            <Header />
            <main >
                <Outlet />
            </main>

            <Container>
                <Footer />
            </Container>
        </div>
    )
}

export default Layout