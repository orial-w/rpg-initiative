export default function manageTurn(character){
    if (character.conditions < 0) return;

    const getLocalStorage = JSON.parse(localStorage.getItem('initiative'));

    for (var index = 0; index < character.conditions.length; index++){
        character.conditions[index].lasts -= 1;
        if (character.conditions[index].lasts < 0){
            character.conditions.splice(index, 1);
        }
    }

    for (index = 0; index < getLocalStorage.length; index++){
        var item = getLocalStorage[index];
        if (item.ID === character.ID){
            getLocalStorage[index] = character;
            break;
        }
    }

    localStorage.setItem('initiative', JSON.stringify(getLocalStorage));
}