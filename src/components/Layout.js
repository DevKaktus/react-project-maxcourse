import { NavLink, Outlet } from "react-router-dom";
import './Layout.scss'
import logo from '../logo.svg'

const Layout = () => {
    return (
        <div>
            <header className={"header"}>
                <div className={"logo"}>
                    <img className={"logo__image"} src={ logo } alt=""/>
                </div>
                <nav className={"header__navigation"}>
                    <NavLink className={"header__navigation-link"} end to={"/react-project-maxcourse"} >Home</NavLink>
                    <NavLink className={"header__navigation-link"} to={"/react-project-maxcourse/Posts"}>Posts</NavLink>
                    <NavLink className={"header__navigation-link"} to={"/react-project-maxcourse/Feedback"}>Feedback</NavLink>
                    <NavLink className={"header__navigation-link"} to={"/react-project-maxcourse/About"}>About Me</NavLink>
                </nav>
            </header>
            <main className={"main"}>
                <Outlet/>
            </main>
            <footer className={"footer"}>
            </footer>
        </div>
    )
}

export default Layout;