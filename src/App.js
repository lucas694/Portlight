import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
//Pages
import Homepage from "./Components/Pages/Homepage";
import AboutUs from "./Components/Pages/AboutUs";
import Work from "./Components/Pages/Work";
import News from "./Components/Pages/News";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path={"/"} element={<Homepage/>} />
          <Route path={"/AboutUs"} element={<AboutUs/>} />
          <Route path={"/Work"} element={<Work/>} />
          <Route path={"/News"} element={<News/>} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
