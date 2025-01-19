const addModal = document.querySelector('.addEquipmentModal');
const pistols = document.querySelector('.pistols');
const basics = document.querySelector('.basics');
const specials = document.querySelector('.specials');
const heavies = document.querySelector('.heavies');
const handToHands = document.querySelector('.handToHands');
const grenades = document.querySelector('.grenades');

const hideAddModal = () => addModal.style.display = 'none';

const displayAddModal = () => {
    hideInvModal();
    addModal.style.display = 'flex';
    const itemRows = document.querySelectorAll('.itemRow');
    itemRows.forEach(itemRow => itemRow.remove());
    for (let item in ae) {
        const equipmentAdd = document.createElement('div');
        equipmentAdd.classList.add('row', 'itemRow', ae[item].type);
        equipmentAdd.id = item;
        equipmentAdd.innerHTML = `
        <span>${item}</span>
        <span>${ae[item].cost}</span>
        <span>${ae[item].range.short}</span>
        <span>${ae[item].range.long}</span>
        <span>${ae[item].hit.short}</span>
        <span>${ae[item].hit.long}</span>
        <span>${ae[item].strength}</span>
        <span>${ae[item].damage}</span>
        <span>${ae[item].saveMod}</span>
        <span>${ae[item].ammoRoll}</span>
        <span>${ae[item].special}</span>
        `;
        if (ae[item].type == 'pistol') {
            document.getElementById('equipmentOptions').insertBefore(equipmentAdd, pistols.previousSibling);
        } else if (ae[item].type == 'basic') {
            document.getElementById('equipmentOptions').insertBefore(equipmentAdd, basics.previousSibling);
        } else if (ae[item].type == 'special') {
            document.getElementById('equipmentOptions').insertBefore(equipmentAdd, specials.previousSibling);
        } else if (ae[item].type == 'heavy') {
            document.getElementById('equipmentOptions').insertBefore(equipmentAdd, heavies.previousSibling);
        } else if (ae[item].type == 'hand-to-hand') {
            document.getElementById('equipmentOptions').insertBefore(equipmentAdd, handToHands.previousSibling);
        } else if (ae[item].type == 'grenade') {
            document.getElementById('equipmentOptions').insertBefore(equipmentAdd, grenades.previousSibling);
        }
    }
    const addEquipment = document.querySelectorAll('.addEquipmentModal .itemRow');
    addEquipment.forEach(piece => {
        piece.addEventListener('click', e => {
            addToInventory(e.target.parentElement.id)
        })
    })
}

const addToInventory = piece => {
    const equipmentPiece = document.createElement('span');
    equipmentPiece.innerText = ` ${piece}`;
    getDisplayInfo(equipmentPiece);
    const equipmentBox = document.getElementById(`equipmentBox${currentGangMember}`);
    equipmentBox.appendChild(equipmentPiece);
    hideAddModal();
}


const addButtons = document.querySelectorAll('.addEquipment');

addButtons.forEach(button => {
    button.addEventListener('click', e => {
        currentGangMember = e.target.id[e.target.id.length - 1];
        displayAddModal()
    });
})

document.querySelector('.close').addEventListener('click', () => hideAddModal())