import React from "react";
import copyicon from './../icons/copy-icon.png'

export default function CopyToClip(){
    function copyIt(){
        let getLocalStorage = JSON.parse(localStorage.getItem('initiative'));

        var textToCopy = '**INITIATIVE:**\n```';
        var index = 0;
        getLocalStorage.map(item=>{
            index++;
            textToCopy += `${index}. (${item.roll}) ${item.name}\n`
        });

        textToCopy += '```'
        navigator.clipboard.writeText(textToCopy);
        alert('Copied to clipboard');
    }

    return (
        <button id="copyToClipBoard" onClick={()=>copyIt()}>
            <img src={copyicon}/>
        </button>
    )
}