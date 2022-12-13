export default ()=> {
    let getLocalStorage = JSON.parse(localStorage.getItem('initiative'));

    if (!getLocalStorage){
        localStorage.setItem('initiative', '[]');
        getLocalStorage = JSON.parse(localStorage.getItem('initiative'));
    }
}