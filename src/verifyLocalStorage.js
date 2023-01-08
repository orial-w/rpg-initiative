export default ()=> {
    let getLocalStorage = JSON.parse(localStorage.getItem('initiative'));
    let initType = JSON.parse(localStorage.getItem('dndInit'));

    if (!getLocalStorage) localStorage.setItem('initiative', '[]');
    if (!initType) localStorage.setItem('dndInit', '"d20"');
}