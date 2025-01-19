const invModal = document.querySelector('.invEquipmentModal');
let currentGangMember;

const hideInvModal = () => invModal.style.display = 'none';

const getInvDetails = equipment => {
    document.getElementById('weaponName').innerText = equipment;
    document.getElementById('distanceShort').innerText = `short: ${ae[equipment].range.short}`;
    document.getElementById('distanceLong').innerText = `long: ${ae[equipment].range.long}`;
    document.getElementById('hitShort').innerText = `short: ${ae[equipment].hit.short}`;
    document.getElementById('hitLong').innerText = `long: ${ae[equipment].hit.long}`;
    document.getElementById('strength').innerText = `strength: ${ae[equipment].strength}`;
    document.getElementById('saveMod').innerText = `save mod: ${ae[equipment].saveMod}`;
    document.getElementById('ammoRoll').innerText = `ammo roll: ${ae[equipment].ammoRoll}`;
    document.getElementById('special').innerText = `special: ${ae[equipment].special}`;
}

const displayInvModal = (val, top) => {
    hideAddModal();
    invModal.style.top = `${top}px`;
    invModal.style.display = 'flex';
    getInvDetails(val);
}
const removeItem = (gangMemberNumber, item) => {
    const itemToRemove = item;
    const equipment = document.querySelectorAll(`#equipmentBox${gangMemberNumber} span`);
    equipment.forEach(piece => {
        if (piece.innerText == itemToRemove) piece.remove();
    });
    hideInvModal();
}

const getDisplayInfo = (selection) => {
    selection.addEventListener('click', e => {
        currentGangMember = e.target.parentElement.id[e.target.parentElement.id.length - 1];
        const rect = e.target.getBoundingClientRect();
        const topPos = rect.top + 40;
        const value = e.target.innerText.trim();
        displayInvModal(value, topPos);
    });
}

const selections = document.querySelectorAll(`.equipmentBox span`);
selections.forEach(selection => getDisplayInfo(selection));

const result = document.querySelector('.result');
result.addEventListener('click', () => hideInvModal());

const remove = document.querySelector('.remove');
remove.addEventListener('click', () => {
    const itemToRemove = document.getElementById('weaponName').innerText;
    removeItem(currentGangMember, itemToRemove)
});