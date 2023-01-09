export default function sortInitiative(initiative){
    var barrelRoll = [];
    var oldInitiative = initiative;
    var newInitiative = [];

    for (let item of initiative){
        barrelRoll.push(item.roll);
    }

    var getSortType = JSON.parse(localStorage.getItem('dndInit'));

    if (getSortType == 'd10') {barrelRoll = barrelRoll.sort((a, b)=>a - b); }
    else {barrelRoll = barrelRoll.sort((a, b)=>b - a);}

    for (var index = 0; index <= barrelRoll.length; index++){
        var counter = 0;
        for (var item of oldInitiative){
            if (item.roll === barrelRoll[index]){
                newInitiative.push(item);
                oldInitiative.splice(counter, 1);
            }
            counter++;
        }
    }

    return newInitiative;
}