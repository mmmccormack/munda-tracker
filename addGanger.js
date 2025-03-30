const addGanger = () => {
    const gangNumber = document.querySelectorAll('.gangMember').length;
    const memberNumber = gangNumber + 1;
    const gangMemberContainer = document.createElement('div');
    gangMemberContainer.classList.add(`gangMember`,`member${memberNumber}`)
    gangMemberContainer.innerHTML = `
        <div class="memberName"><input type="text" id="name${memberNumber}"></div>
        <div class="memberNumber" id="member${memberNumber}">${memberNumber}</div>
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
            <div class="addEquipment" id="add${memberNumber}">add item</div>
        </div>
        <div class="costBox">
            <input class="gangerCost" id="cost${memberNumber}" type="text">
        </div>
        <div class="expBox">
            <input class="gangerExp" id="exp${memberNumber}" type="text">
        </div>
        <div class="removeBox">
            <button class="gangerRemove" id="remove${memberNumber}" type="text">Kill</button>
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

    document.getElementById(`add${memberNumber}`).addEventListener('click', e => {
        currentGangMember = e.target.id[e.target.id.length - 1];
        displayAddModal()
    });
    calcGangRating();
}

const addButton = document.querySelector('.addGanger');
addButton.addEventListener('click', () => addGanger());