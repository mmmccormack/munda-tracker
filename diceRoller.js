const singleRoll = () => {
    let counter = 1;
    setInterval( () => {
        if (counter < 150) {
            document.querySelector('.singleDiceRoll').innerHTML = ``;
            document.querySelector('.doubleDiceRoll').innerHTML = ``;
            const result = Math.floor(Math.random() * 6) + 1;
            document.querySelector('.singleDiceRoll').innerHTML = `<img src="./skull-0${result}.svg" alt="${result}">`;
            counter++;
            document.querySelector('.rollResult').innerText = result;
        } else {
            clearInterval(this);
        }
    }, 5);
}

const doubleRoll = () => {
    let counter = 1;
    setInterval( () => {
        if (counter < 150) {
            document.querySelector('.singleDiceRoll').innerHTML = ``;
            document.querySelector('.doubleDiceRoll').innerHTML = ``;
            const resultOne = Math.floor(Math.random() * 6) + 1;
            const resultTwo = Math.floor(Math.random() * 6) + 1;
            document.querySelector('.singleDiceRoll').innerHTML = `<img src="./skull-0${resultOne}.svg" alt="${resultOne}">`;
            document.querySelector('.doubleDiceRoll').innerHTML = `<img src="./skull-0${resultTwo}.svg" alt="${resultTwo}">`;
            counter++;
            document.querySelector('.rollResult').innerText = resultOne + resultTwo;
        } else {
            clearInterval(this);
        }
    }, 5);
}
    
document.querySelector('.singleRoll').addEventListener('click', () => singleRoll());
document.querySelector('.doubleRoll').addEventListener('click', () => doubleRoll());