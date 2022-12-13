export default function addCondition(condition, itemID){
    var getLocalStorage = JSON.parse(localStorage.getItem('initiative'));

    for (var index = 0; index < getLocalStorage.length; index++){

        if (getLocalStorage[index].ID == itemID){
            getLocalStorage[index].conditions.push({
                name: condition.name,
                lasts: condition.lasts,
                ID: Math.random()
            });
        }
    }
    localStorage.setItem('initiative', JSON.stringify(getLocalStorage));
}