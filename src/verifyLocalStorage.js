export default function verify() {
    let getLocalStorage = JSON.parse(localStorage.getItem('initiative'));
    let initType = JSON.parse(localStorage.getItem('dndInit'));
    let color = JSON.parse(localStorage.getItem('color'));

    if (!getLocalStorage) localStorage.setItem('initiative', '[]');
    if (!initType) localStorage.setItem('dndInit', '"d20"');
    if (!color) localStorage.setItem('color', JSON.stringify({
        main_color: '#118844',
        main_dark_color: '#007733'
    }));
    color = JSON.parse(localStorage.getItem('color'));

    document.querySelector('#root').style.setProperty('--main-color', color.main_color);
    document.querySelector('#root').style.setProperty('--main-dark-color', color.main_dark_color);
}