import React from 'react'
import { useState } from 'react';
import addCondition from './func/addCondition.js'

export default function ConditionBox(req){
    const getLocalStorage = JSON.parse(localStorage.getItem('initiative'));

    const [inputName, setInputName] = useState("");
    const [inputLasts, setInputLasts] = useState("");

    function findCharacterByID(id){
        var pseudoCharacter = {
            name: 'Nobody',
            roll: 0,
            ID: '',
            acting: false,
            conditions: [{name: 'This character has no conditions.', lasts: -1}]
        };

        for (var item of getLocalStorage){
            if (item.ID === id && item.conditions.length > 0){
                pseudoCharacter = item;
            }
        }
        return pseudoCharacter;
    }

    function uglyConditionsBecauseImLazy(cond){
        if (cond.lasts > 0) {
            return cond.name+' - '+cond.lasts+' turns';
        } else if (cond.lasts === 0) {
            return cond.name+' - Last turn';
        } else {
            return cond.name;
        }
    }
    
    return (
        <div className='conditionBox'>
            <h3>CONDITIONS</h3>

            <div id="conditionForm">
                <button className='addContition' onClick={()=>{
                    setInputName('');
                    setInputLasts('');
                    var querySelected = document.querySelectorAll('.inputCondition')
                    var setCondition = {
                        ID: querySelected[0].value,
                        name: querySelected[1].value,
                        lasts: querySelected[2].value
                    }
                    addCondition(setCondition, setCondition.ID);
                }}>+</button>

                <select className="inputCondition">
                    {
                        getLocalStorage.map(item=>{
                            return (
                                <option selected={item.acting} value={item.ID}>{item.name}</option>
                            )
                        })
                    }
                </select>
                
                <input className='inputCondition' type='text' placeholder='Name'
                onChange={(e) => setInputName(e.target.value)} value={inputName}>
                </input>
                <input className='inputCondition' type='number' placeholder='Lasts'
                onChange={(e) => setInputLasts(e.target.value)} value={inputLasts}>
                </input>
            </div>

            <ul className="conditionList">
                {
                    findCharacterByID(req.actingID).conditions.map(cond=>{
                    return(<li key={cond.name}>{uglyConditionsBecauseImLazy(cond)}</li>);})
                }
            </ul>
        </div>
    )
}