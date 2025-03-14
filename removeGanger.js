const removeGanger = gangMemberNumber => {
    const gangerToRemove = document.querySelector(`.member${gangMemberNumber}`);
    console.log(gang[gangMemberNumber])
    gangerToRemove.remove();
    const remainingGangers = document.querySelectorAll('.gangMember');
    console.log(remainingGangers);

    // for each number, reassign each property number to each gangMember

    // remainingGangers.forEach((ganger, index) => {
    //     ganger.innerHTML = `
    //             <div class="memberName" ><input id="name${index+1}" type="text" value="${ganger.name}"></div>
    //             <div class="memberNumber" id="member${index+1}">${index+1}</div>
    //             <div class="characteristicsBox">
    //                 <div class="statsBox">
    //                     <div class="stat">
    //                         <span>M</span>
    //                         <input class="move" type="number" min="1" max="10" value="${ganger.move}" id="move${index+1}">
    //                     </div>
    //                     <div class="stat">
    //                         <span>WS</span>
    //                         <input class="ws skill" type="number" min="1" max="10" value="${ganger.ws}" id="ws${index+1}">
    //                     </div>
    //                     <div class="stat">
    //                         <span>BS</span>
    //                         <input class="bs skill" type="number" min="1" max="10" value="${ganger.bs}" id="bs${index+1}">
    //                     </div>
    //                     <div class="stat">
    //                         <span>S</span>
    //                         <input class="strength" type="number" min="1" max="10" value="${ganger.strength}" id="strength${index+1}">
    //                     </div>
    //                     <div class="stat">
    //                         <span>T</span>
    //                         <input class="toughness" type="number" min="1" max="10" value="${ganger.toughness}" id="toughness${index+1}">
    //                     </div>
    //                     <div class="stat">
    //                         <span>W</span>
    //                         <input class="wounds" type="number" min="1" max="10" value="${ganger.wounds}" id="wounds${index+1}">
    //                     </div>
    //                     <div class="stat">
    //                         <span>I</span>
    //                         <input class="initiative" type="number" min="1" max="10" value="${ganger.initiative}" id="initiative${index+1}">
    //                     </div>
    //                     <div class="stat">
    //                         <span>A</span>
    //                         <input class="attacks" type="number" min="1" max="10" value="${ganger.attacks}" id="attacks${index+1}">
    //                     </div>
    //                     <div class="stat">
    //                         <span>Ld</span>
    //                         <input class="leadership" type="number" min="1" max="10" value="${ganger.leadership}" id="leadership${index+1}">
    //                     </div>
    //                 </div>
    //                 <div class="fw" id="fw${index+1}">FW: </div>
    //             </div>
    //             <div class="equipmentBox" id="equipmentBox${index+1}">
    //                 <div class="addEquipment" id="add${index+1}">add item</div>
    //             </div>
    //             <div class="costBox">
    //                 <input class="gangerCost" id="cost${index+1}" type="text" value="${ganger.cost}">
    //             </div>
    //             <div class="expBox">
    //                 <input class="gangerExp" id="exp${index+1}" type="text" value="${ganger.exp}">
    //             </div>
    //             <div class="removeBox">
    //                 <button class="gangerRemove" id="remove${index+1}" type="text">Kill</button>
    //             </div>
    //         `;
    // })

    // for (let i = 1; i < remainingGangers.length + 1; i++) {

    // }
    // calcGangRating();
}