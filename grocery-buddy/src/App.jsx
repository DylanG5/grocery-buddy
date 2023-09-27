import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import ListPreview from "./components/ListPreview";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route exact path="/" element={<HomePage />}></Route>
                </Routes>
                <ul className="app-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </div>
        </Router>
        // <div className="App">
        //   <Title/>
        //   <ListPreview/>

        // </div>
    );
}

export default App;
