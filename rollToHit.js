const rollToHit = (val, gangMemberNumber) => {
    const weapon = ae[val];
    const weaponType = ae[val].type;
    let numberMinusSeven;
    if (weaponType != 'hand-to-hand') {
        numberMinusSeven = document.getElementById(`bs${gangMemberNumber}`).value;
    } else {
        numberMinusSeven = document.getElementById(`ws${gangMemberNumber}`).value;
    }
    const hitMod = {};
    hitMod.short = Number(ae[val].hit.short);
    hitMod.long = Number(ae[val].hit.long);
    if (hitMod.short) {
        hitMod.hitShort = 7 - numberMinusSeven - hitMod.short;
    } else {
        hitMod.hitShort = 7 - numberMinusSeven;
    }
    if (hitMod.long) {
        hitMod.hitLong = 7 - numberMinusSeven - hitMod.long;
    } else {
        hitMod.hitLong = 7 - numberMinusSeven;
    }

    const rollDiv = document.querySelector('.rolls');
    rollDiv.innerText = `short: ${hitMod.hitShort} long: ${hitMod.hitLong}`;
    
}

