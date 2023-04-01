import React from "react";
import copyicon from './../icons/copy-icon.png'

export default function CopyToClip(){
    function copyIt(){
        let getLocalStorage = JSON.parse(localStorage.getItem('initiative'));

        var textToCopy = '**INITIATIVE:**\n```\n';
        var index = 0;
        getLocalStorage.map(item=>{
            index++;
            textToCopy += `${index}. (${item.roll})\t${item.name}\n`
            return textToCopy;
        });

        textToCopy += '```'
        navigator.clipboard.writeText(textToCopy);
        alert('Copied to clipboard');
    }

    return (
        <button id="copyToClipBoard" class="gbutton" onClick={async ()=> await copyIt()}>
            <img src={copyicon} alt="copy icon"></img>
        </button>
    )
}