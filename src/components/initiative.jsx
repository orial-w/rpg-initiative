import React from "react";
import { useState } from "react";
import newItem from './func/newItem.js'
import  InitList from "./initList.jsx";

export default function Initiative(){
    const [inputName, setInputName] = useState("");
    const [inputRoll, setInputRoll] = useState("");

    return (
        <div className="Box">
            <div className="subHeader">
                <h2>INITIATIVE</h2>
            </div>
            <div className="headerForm">
                <input id="Name" placeholder="Name" value={inputName} autoComplete="off"
                onChange={(e) => setInputName(e.target.value)}></input>

                <input id="Roll" type="number" placeholder="Roll" value={inputRoll}
                onChange={(e) => setInputRoll(e.target.value)}></input>

                <button onClick={()=> {
                    newItem(
                        document.querySelector('#Name').value,
                        document.querySelector('#Roll').value
                    ); setInputName(""); setInputRoll(""); //Clear input text
            }}>Add</button>

            </div>
            <InitList/>
        </div>
    )
}