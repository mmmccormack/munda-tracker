const calcGangRating = () => {
    const gangRating = document.getElementById('gangRating');
    const gangerCost = document.querySelectorAll('.gangerCost');
    const gangerExp = document.querySelectorAll('.gangerExp');
    let totalGangRating = 0;
    gangerCost.forEach(ganger => totalGangRating += ~~ganger.value);
    gangerExp.forEach(ganger => totalGangRating += ~~ganger.value);
    gangRating.innerHTML = totalGangRating;
 }