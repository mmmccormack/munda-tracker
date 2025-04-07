const skillsModal = document.querySelector('.skillsModal');
const skillsInfoModal = document.querySelector('.skillsInfoModal');

let currentSelectedSkill;

const hideSkillsModal = () => skillsModal.style.display = 'none';
const hideSkillsInfoModal = () => skillsInfoModal.style.display = 'none';


const displaySkillModal = val => {
    skillsInfoModal.style.top = `30%`;
    skillsInfoModal.style.display = 'flex';
    document.querySelector('.skillInjuryTitle').innerText = val;
    document.querySelector('.skillInjuryDesc').innerText = as[val].description;
}

const displaySkillInfo = (selection) => {
    hideSkillsInfoModal();
    selection.addEventListener('click', e => {
        currentSelectedSkill = e.target.innerText;
        currentGangMember = e.target.parentElement.id[e.target.parentElement.id.length - 1];
        const value = e.target.innerText.trim();
        displaySkillModal(value);
    });
}

const addToSkills = (gangMemberNumber, selectedSkill) => {
    const skillToAdd = document.createElement('span');
    skillToAdd.innerText = ` ${selectedSkill}`;
    displaySkillInfo(skillToAdd);
    const skillsBox = document.getElementById(`gangerSkillsInjuries${gangMemberNumber}`);
    skillsBox.appendChild(skillToAdd);
    hideSkillsModal();
}

const removeFromSkills = (gangMemberNumber, skill) => {
    const skillsList = document.querySelectorAll(`#gangerSkillsInjuries${gangMemberNumber} span`);
    skillsList.forEach(individual => {
        if (individual.innerText.trim() == currentSelectedSkill.trim()) individual.remove()
    });
    hideSkillsInfoModal();
}



document.querySelector('.addSkill').addEventListener('click', () => {
    addToSkills(currentGangMember, currentSelectedSkill);
})
document.querySelector('.removeSkill').addEventListener('click', e => {
    removeFromSkills(currentGangMember, currentSelectedSkill);
})
document.querySelector('.closeSkill').addEventListener('click', e => {
    hideSkillsInfoModal();
})