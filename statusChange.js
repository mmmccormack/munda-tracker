const memberStatuses = document.querySelectorAll('.gangMember .memberNumber');
memberStatuses.forEach(member => {
    member.addEventListener('click', e => {
        const gangMemberBox = document.querySelector(`.${e.target.id}`);
        const memberStatus = [...gangMemberBox.classList];
        if (memberStatus.includes('dead')) {
            gangMemberBox.classList.remove('pinned', 'downed', 'dead');
        } else if (memberStatus.includes('downed')) {
            gangMemberBox.classList.add('dead');
        } else if (memberStatus.includes('pinned')) {
            gangMemberBox.classList.add('downed');
        } else {
            gangMemberBox.classList.add('pinned');
        }
    });
});

const memberNames = document.querySelectorAll('.gangMember .memberName');
memberNames.forEach(member => {
    member.addEventListener('click', e => {
        const gangMember = e.target.parentElement.classList[1];
        const gangMemberNumber = gangMember[gangMember.length - 1];
        const gangMemberBox = document.querySelector(`.member${gangMemberNumber}`);
        gangMemberBox.classList.remove('pinned', 'downed', 'dead');
    });
});