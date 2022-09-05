import './App.css';
import {useEffect, useState} from "react";
import { NavBar } from './components/NavBar';
import Header from "./components/Header";
import Preloader from './components/Preloader';
import HeroArea from './components/HeroArea';
import AboutMe from './components/About';
// import './styles/globals.css';


const App = () => {
  const [preloaded, setPreloaded] = useState(false);

  useEffect(() => {
      setTimeout(() => {
          setPreloaded(true);
      }, 800)
  }, []);

  return (

    <div className="App">
      <Preloader preloaded={preloaded}/>
      <Header/>
      <HeroArea/>
      <AboutMe/>
      {/* <Header/> */}
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
