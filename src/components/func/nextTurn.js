export default function nextTurn(){
    var getLocalStorage = JSON.parse(localStorage.getItem('initiative'));

    for (var index = 0; index < getLocalStorage.length; index++){
        if (index >= getLocalStorage.length-1){
            getLocalStorage[index].acting = false;
            getLocalStorage[0].acting = true;
            break;
        }
        else if (getLocalStorage[index].acting === true){
            getLocalStorage[index].acting = false;

            if (!getLocalStorage[index+1]){
                getLocalStorage[0].acting = true;
            } else getLocalStorage[index+1].acting = true;

            break
        }
        
    }

    localStorage.setItem('initiative', JSON.stringify(getLocalStorage));
}