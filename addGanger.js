const tutorialBlocks = document.querySelectorAll('.tutorial');
tutorialBlocks.forEach(block => {
    if (block.classList.contains('step2')) {
        block.style.display = 'none';
    } else {
        block.style.display = 'block';
    }
})

let gangerClickCounter = 0;

const addGanger = () => {
    gangerClickCounter++;
    if (gangerClickCounter == 1) {
        // hide step 1 and show step 2
        tutorialBlocks.forEach(block => {
            if (block.classList.contains('step1')) {
                block.remove();
            } else {
                block.style.display = 'block';
            }
        })
    } else if (gangerClickCounter > 1) {
        // hide all tutorials
        tutorialBlocks.forEach(block => block.remove());
    }
    let gangNumber = document.querySelectorAll('.gangMember').length;
    if (gangNumber == null) gangNumber = 0;
    const memberNumber = gangNumber + 1;
    const gangMemberContainer = document.createElement('div');
    gangMemberContainer.classList.add(`gangMember`,`member${memberNumber}`)
    gangMemberContainer.innerHTML = `
                <div class="memberNameAndType">
                    <div class="memberType">
                        <select name="type${memberNumber}" id="type${memberNumber}">
                            <option value="Gang Leader">Gang Leader</option>
                            <option value="Heavy">Heavy</option>
                            <option value="Ganger" default selected>Ganger</option>
                            <option value="Juve">Juve</option>
                        </select>
                    </div>
                    <div class="memberName">
                        <textarea id="name${memberNumber}"></textarea>
                        <div class="memberNumber" id="member${memberNumber}">${memberNumber}</div>
                    </div>
                </div>
                <div class="statsSkillsAndItems">
                    <div class="statsAndItems">
                        <div class="characteristicsBox">
                            <div class="statsBox">
                                <div class="stat">
                                    <span>M</span>
                                    <input class="move" type="number" min="1" max="10" value="4" id="move${memberNumber}">
                                </div>
                                <div class="stat">
                                    <span>WS</span>
                                    <input class="ws skill" type="number" min="1" max="10" value="3" id="ws${memberNumber}">
                                </div>
                                <div class="stat">
                                    <span>BS</span>
                                    <input class="bs skill" type="number" min="1" max="10" value="3" id="bs${memberNumber}">
                                </div>
                                <div class="stat">
                                    <span>S</span>
                                    <input class="strength" type="number" min="1" max="10" value="3" id="strength${memberNumber}">
                                </div>
                                <div class="stat">
                                    <span>T</span>
                                    <input class="toughness" type="number" min="1" max="10" value="3" id="toughness${memberNumber}">
                                </div>
                                <div class="stat">
                                    <span>W</span>
                                    <input class="wounds" type="number" min="1" max="10" value="1" id="wounds${memberNumber}">
                                </div>
                                <div class="stat">
                                    <span>I</span>
                                    <input class="initiative" type="number" min="1" max="10" value="3" id="initiative${memberNumber}">
                                </div>
                                <div class="stat">
                                    <span>A</span>
                                    <input class="attacks" type="number" min="1" max="10" value="1" id="attacks${memberNumber}">
                                </div>
                                <div class="stat">
                                    <span>Ld</span>
                                    <input class="leadership" type="number" min="1" max="10" value="7" id="leadership${memberNumber}">
                                </div>
                            </div>
                            <div class="fw" id="fw${memberNumber}">FW: </div>
                        </div>
                        <div class="equipmentBox" id="equipmentBox${memberNumber}">
                            <div class="addEquipment" id="add${memberNumber}">item</div>
                        </div>
                        <div class="costBox">
                            <span>cost</span>
                            <input class="gangerCost" id="cost${memberNumber}" type="text" value="0">
                        </div>
                        <div class="expBox">
                            <span>exp</span>
                            <input class="gangerExp" id="exp${memberNumber}" type="text" value="0">
                        </div>
                        <div class="removeBox">
                            <button class="gangerRemove" id="remove${memberNumber}" type="text" name="">Kill</button>
                        </div>
                    </div>
                    <div class="gangerSkillsInjuries" id="gangerSkillsInjuries${memberNumber}">
                        <div class="addSkills" id="skills${memberNumber}">special</div>
                    </div>
                </div>
    `
    document.querySelector('body').appendChild(gangMemberContainer);

    const gangerSkillBox = document.querySelectorAll(`#ws${memberNumber}`,`#bs${memberNumber}`);
    gangerSkillBox.forEach(member => {
        const gangMemberNumber = member.id.replace('ws', '');
        updateWSBS(member.value, gangMemberNumber);
        member.addEventListener('change', e => {
            updateWSBS(e.target.value, gangMemberNumber);
        });
    });

    const addSkills = document.querySelectorAll('.addSkills');
        addSkills.forEach(button => {
            button.addEventListener('click', e => {
                currentGangMember = e.target.parentElement.id[e.target.parentElement.id.length - 1];
                const skillOptions = document.querySelector('.skillOptions');
                skillOptions.innerHTML = ``;
                for (let item in as) {
                    const skillName = document.createElement('span');
                    skillName.innerHTML = item;
                    skillName.addEventListener('click', () => {
                        document.querySelector('.skillDescriptions').innerHTML = as[item].description;
                        currentSelectedSkill = item;
                    });
                    skillOptions.appendChild(skillName);
                }
                skillsModal.style.display = 'flex';
            });
        });

    document.getElementById(`add${memberNumber}`).addEventListener('click', e => {
        currentGangMember = e.target.id[e.target.id.length - 1];
        displayAddModal()
    });
    calcGangRating();
}

const addButton = document.querySelector('.addGanger');
addButton.addEventListener('click', () => addGanger());