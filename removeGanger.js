const removeGanger = gangMemberNumber => {
    const gangerToRemove = document.querySelector(`.member${gangMemberNumber}`);
    console.log(gang[gangMemberNumber])
    gangerToRemove.remove();
    const remainingGangers = document.querySelectorAll('.gangMember');
}