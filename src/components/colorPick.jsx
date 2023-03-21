import React from "react";
import { useState } from "react";
import brush_icon from "./../icons/brush.png"
import Popup from './popup.jsx'

export default function ColorPick() {
    const [ openPopup, setOpenPopup] = useState(false);

    function renderColorPalette() {
        const palette = {
            green: ['#118844', '#007733'],
            blue: ['#224499', '#113388'],
            purple: ['#6441a5', '#533094'],
            red: ['#a40804', '#940500'],
            orange: ['#dd6d00', '#cc5c00'],
            black: ['#111', '#000']
        }

        var jsx = Object.getOwnPropertyNames(palette).map(color=>{
            return (<button
                className="color-option" 
                style={{backgroundColor: palette[color][0]}}
                key={color}
                onClick={()=>{
                    localStorage.setItem('color', JSON.stringify({
                        main_color: palette[color][0],
                        main_dark_color: palette[color][1]
                    }));
                    window.location.reload();
                }}
                ></button>);
        })

        return jsx;
    }

  

    return (
        <>
            <button id="color-pick" className="gbutton" onClick={()=>setOpenPopup(true)}>
                <img src={brush_icon} alt="brush"></img>
            </button>

            <Popup trigger={{
                    state: openPopup,
                    set: setOpenPopup
                }} title={'Choose a color'} tam={[130, 650]}>
                    <div className="palette">
                        {renderColorPalette()}
                    </div>
            </Popup>
        </>

    );
}