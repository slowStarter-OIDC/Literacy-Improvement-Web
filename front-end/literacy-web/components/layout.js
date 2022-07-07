import Footer from "./organism/footer/Footer";
import Nav from "./organism/Nav/Nav";
import LoginCheck from "./organism/page-login/LoginCheck";

export default function Layout({ children }) {

    return (
        <>
            <Nav></Nav>
            <main>{children}</main>
            <Footer></Footer>
            <LoginCheck></LoginCheck>
        </>
    )
}