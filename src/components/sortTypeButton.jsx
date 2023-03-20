import React from "react";
import { useState } from "react";
import d20_icon from "./../icons/d20.png"
import d10_icon from "./../icons/d10.png"
import sortInitiative from "./func/sortInitiative.js";

export default function SortTypeButton (){
    let startIcon = {
        d20: d20_icon,
        d10: d10_icon
    }

    const getLS = JSON.parse(localStorage.getItem('dndInit'));
    const [diceIcon, setDiceIcon] = useState(startIcon[getLS]);

    function sortLocalStorage(){
        let newInit = sortInitiative(JSON.parse(localStorage.getItem('initiative')));
        localStorage.setItem('initiative', JSON.stringify(newInit));
    }
    
    function setInitType(getLS){
        if (getLS === 'd20'){
            setDiceIcon(d10_icon);
            localStorage.setItem('dndInit', JSON.stringify('d10'));
        } else {
            setDiceIcon(d20_icon);
            localStorage.setItem('dndInit', JSON.stringify('d20'));
        }

        sortLocalStorage();
        window.location.reload();
    }

    return (
        <button id="sortButton" className="gbutton" onClick={()=>setInitType(getLS)}>
            <img src={diceIcon} alt="dice icon"></img>
        </button>
    )
}