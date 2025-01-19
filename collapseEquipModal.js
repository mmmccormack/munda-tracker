const collapseMenu = menuHeading => {
    const itemsToHide = document.querySelectorAll(`.${menuHeading}`);
    if (document.querySelector(`#o${menuHeading}`).classList.contains(`minimized`)){
        document.querySelector(`#o${menuHeading}`).classList.remove(`minimized`);
        itemsToHide.forEach(item => item.style.display = 'grid')
    } else {
        document.querySelector(`#o${menuHeading}`).classList.add(`minimized`);
        itemsToHide.forEach(item => item.style.display = 'none')
    }
}

const itemTypeRows = document.querySelectorAll('#equipmentOptions div');
itemTypeRows.forEach(itemTypeRow => {
    itemTypeRow.addEventListener('click', e => {
        collapseMenu(e.target.id.slice(1));
    })
})