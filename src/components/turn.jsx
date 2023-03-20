import React from "react";
import { useState } from 'react';
import nextTurn from "./func/nextTurn.js";
import ConditionBox from "./conditionBox.jsx";
import manageTurn from "./func/manageTurn.js";

export default function Turn(array){
    function getTurn(){
        var getLocalStorage = JSON.parse(localStorage.getItem('initiative'));

        for (let item of getLocalStorage){
            if (item.acting === true){
                return item;
            }
        }
        return {name: 'Nobody'};
    }

    const [ currentTurn, setCurrentTurn ] = useState((getTurn()).name);
    const [ actingCharacter, setActingCharacter ] = useState({});

    return (
        <div className="Box">
            <div className="subHeader">
                <h2>TURN MANAGER</h2>
            </div>

            <div className="currentTurn">
                <h3>Current Turn</h3>
                <label>{currentTurn}</label>
            </div>
            <button className="nextTurnButton" onClick={async ()=>{
                nextTurn();

                const character = getTurn();
                setCurrentTurn(character.name);
                document.title = character.name+"'s turn."
                setActingCharacter(character);
                array.test[1](Math.random);
                manageTurn(character);
                }}>Next Turn</button>

            
            <ConditionBox actingID={actingCharacter.ID}/>
        </div>
    )
}