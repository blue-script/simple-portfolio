import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/section/main/Main";
import {Skills} from "./layout/section/skills/Skills";
import {Works} from "./layout/section/works/Works";
import {Testimony} from "./layout/section/testimony/Testimony";
import {Contact} from "./layout/section/contact/Contact";
import {Slogan} from "./layout/section/slogan/Slogan";
import {Footer} from "./layout/footer/Footer";
import {Particle} from "./components/particle/Particle";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn";


function App() {
    return (
        <div className="App">
          <Particle/>
          <Header/>
          <Main/>
          <Skills/>
          <Works/>
          <Testimony/>
          <Contact/>
          <Slogan/>
          <Footer/>
          <GoTopBtn/>
        </div>
    );
}

export default App;
