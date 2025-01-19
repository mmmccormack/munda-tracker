const changeFWCount = (gangMemberNumber) => {
    const fleshWoundChecks = document.querySelectorAll(`#fw${gangMemberNumber} input`);
    let currentCount = 0;
    fleshWoundChecks.forEach(box => !box.checked ? currentCount++ : '')
    document.getElementById(`ws${gangMemberNumber}`).value = currentCount;
    document.getElementById(`bs${gangMemberNumber}`).value = currentCount;
}

const updateWSBS = (updateNum, gangMemberNumber) => {
    document.getElementById(`fw${gangMemberNumber}`).innerHTML = 'FW: ';
    document.getElementById(`ws${gangMemberNumber}`).value = updateNum;
    document.getElementById(`bs${gangMemberNumber}`).value = updateNum;
    for (let i = 0; i < updateNum; i++) {
        const fleshWoundCounter = document.createElement('input');
        fleshWoundCounter.setAttribute('type', 'checkbox');
        fleshWoundCounter.checked = false;
        fleshWoundCounter.classList.add('fleshWound');
        fleshWoundCounter.addEventListener('change', (e) => {
            changeFWCount(gangMemberNumber);
        });
        document.getElementById(`fw${gangMemberNumber}`).appendChild(fleshWoundCounter);
    }
}

// const gangerSkillBoxes = document.querySelectorAll('.ws, .bs');
// gangerSkillBoxes.forEach(member => {
//     const gangMemberNumber = member.id[member.id.length -1];
//     updateWSBS(member.value, gangMemberNumber);
//     member.addEventListener('change', e => {
//         updateWSBS(e.target.value, gangMemberNumber);
//     });
// });

