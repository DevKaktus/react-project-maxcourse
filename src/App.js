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
                    <Route strict path={"/react-project-maxcourse"} element={<Home/>}/>
                    <Route path={"/react-project-maxcourse/posts"} element={<Posts/>}/>
                    <Route path={"/react-project-maxcourse/feedback"} element={<Feedback />}/>
                    <Route path={"/react-project-maxcourse/about"} element={<About />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
