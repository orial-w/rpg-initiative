import React from "react";

export default function ItemBody(){
    let getLocalStorage = JSON.parse(localStorage.getItem('initiative'));

    return (
        <li className="characterInitiative" key={item.ID}>
            {getLocalStorage.map((item)=>{
                return (
                <div className="InitiativeItem">
                    <button>X</button>
                    <p>{item.roll}</p>
                    <p>{item.name}</p>
                </div>
                )
            })}
        </li>
    )
}