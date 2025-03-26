const changeFWCount = (gangMemberNumber) => {
    const fleshWoundChecks = document.querySelectorAll(`#fw${gangMemberNumber} input`);
    let currentCount = 0;
    fleshWoundChecks.forEach(box => !box.checked ? currentCount++ : '')
    document.getElementById(`ws${gangMemberNumber}`).value = currentCount;
    document.getElementById(`bs${gangMemberNumber}`).value = currentCount;
}

const updateWSBS = (updateNum, gangMemberNumber) => {
    document.getElementById(`fw${gangMemberNumber}`).innerHTML = `FW: `;
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
    const memberStatus = document.createElement('span');
    memberStatus.classList.add('status');
    memberStatus.id = `status${gangMemberNumber}`
    memberStatus.innerHTML = `status: normal`
    document.getElementById(`fw${gangMemberNumber}`).appendChild(memberStatus)
}