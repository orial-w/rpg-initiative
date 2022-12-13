import sortInitiative from "./sortInitiative.js";

export default function newItem (characterName, roll){
    let getLocalStorage = JSON.parse(localStorage.getItem('initiative'));

    const itemID = Math.random();
    let item = {
        name: characterName,
        roll: roll,
        ID: itemID,
        acting: false,
        conditions: []
    }

    getLocalStorage[getLocalStorage.length] = item;

    getLocalStorage = sortInitiative(getLocalStorage);
    localStorage.setItem('initiative', JSON.stringify(getLocalStorage));
    return;
}