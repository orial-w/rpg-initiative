export default function newItem(itemID, refresh){
    let getLocalStorage = JSON.parse(localStorage.getItem('initiative'));

    let index = 0;
    getLocalStorage.map(item=>{
        if (item.ID === itemID){
            getLocalStorage.splice(index, 1);
        }
        index++; 
        return index;
    })

    localStorage.setItem('initiative', JSON.stringify(getLocalStorage));
    return;
}