import './App.css';
import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Posts from "./pages/Posts/Posts";
import Feedback from "./pages/Feedback";
import About from "./pages/AboutMe";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/react-project-maxcourse"} element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={"posts"} element={<Posts/>}/>
                    <Route path={"feedback"} element={<Feedback />}/>
                    <Route path={"about"} element={<About />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
