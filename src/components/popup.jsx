import React from "react";

export default function Popup(req) {
    var tam = req.tam;
    if (!req.tam){
        tam = [400, 650]
    }

    return (req.trigger.state) ? (
        <div className="popup-ext" >
            <div className="popup-box Box" 
                style={{
                    height: tam[0]+'px',
                    width: tam[1]+'px'}}
            >

                <div className="subHeader">
                    <button className="close-popup" onClick={()=>{req.trigger.set(false)}}>
                        X
                    </button>
                    <h2 className="subheader">{req.title}</h2>
                </div>
                {req.children}
            </div>
        </div>
    ) : "";
}