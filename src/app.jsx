import React from "react";
import { useState } from "react";
import Header from './components/header.jsx'
import Initiative from './components/initiative.jsx'
import Turn from './components/turn.jsx'
import verifyLocalStorage from "./verifyLocalStorage.js";
import CopyToClip from "./components/copyToClip.jsx";
import SortTypeButton from "./components/sortTypeButton.jsx";
import Footer from "./components/footer.jsx"

import './index.css'
import './css/box.css'
import './css/header.css'
import './css/footer.css'
import './css/hidescrollbar.css'
import './css/inList.css'
import './css/subHeader.css'
import './css/turnBox.css'
import './css/global_buttons.css'

verifyLocalStorage();

export default function App(){
    // too late to change this var name
    // its syncs all boxes together
    var [test, setTest] = useState(false);

    return (
        <div id="App">
            <Header />
            <div id="Warper">
                <Initiative />
                <Turn test={[test, setTest]}/>
                <div id="global_buttons">
                    <SortTypeButton />
                    <CopyToClip />
                </div>
            </div>
            <Footer />
        </div>
    )
}