const calcCost = (gangMemberNumber, item, operation) => {
    const itemCost = ae[item].cost;
    const currentCost = document.getElementById(`cost${gangMemberNumber}`).value;
    let updatedCost = 0;
    if (operation === 'add') {
        updatedCost = ~~currentCost + ~~itemCost;
    } else {
        updatedCost = ~~currentCost - ~~itemCost;
    }
    document.getElementById(`cost${gangMemberNumber}`).value = '';
    document.getElementById(`cost${gangMemberNumber}`).value = updatedCost;
    calcGangRating();
}