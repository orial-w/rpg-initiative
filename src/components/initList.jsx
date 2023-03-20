import React from "react";
import removeItem from './func/removeItem.js'
import sortInitiative from "./func/sortInitiative.js";

import { useState } from "react";

export default function InitList(){
    let getLocalStorage = JSON.parse(localStorage.getItem('initiative'));
    
    const [removed, setRemoved] = useState(0);

    return (
        <ul id="InitiativeList" nametag={removed}>
            {
                getLocalStorage.map((item)=>
                    <li className={"InitiativeItem acting_"+item.acting} key={item.ID}>
                        {()=>setRemoved(removed+1)}
                        <button onClick={()=>{
                            removeItem(item.ID);
                            setRemoved(removed-1);
                        }}>X</button>
                        <p>{item.roll}</p>
                        <p>{item.name}</p>
                    </li>
                )
            }
        </ul>
    )
}