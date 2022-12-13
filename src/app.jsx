import React from "react";
import { useState } from "react";
import Header from './components/header.jsx'
import Initiative from './components/initiative.jsx'
import Turn from './components/turn.jsx'
import verifyLocalStorage from "./verifyLocalStorage.js";

import './index.css'
import './css/box.css'
import './css/header.css'
import './css/hidescrollbar.css'
import './css/inList.css'
import './css/subHeader.css'
import './css/turnBox.css'

verifyLocalStorage();

export default function App(){
    var [test, setTest] = useState(false);

    return (
        <div id="App">
            <Header />
            <div id="Warper">
                <Initiative />
                <Turn test={[test, setTest]}/>
            </div>
        </div>
    )
}