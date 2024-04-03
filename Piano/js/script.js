const keys = document.querySelectorAll('.key');
const checkbox = document.querySelector('.checkbox__keys');
const switcher = document.querySelector('.switcher');
const keysSection = document.querySelector('.piano__keys');


const playNote = (note) => {
    const audio = new Audio(`../notes/${note}.wav`);
    audio.play();
}

const handleMouseDown = (key) => {
    playNote(key.getAttribute('data-note'));

    if (key.className.includes('black')) {
        key.classList.add('black--pressed')
        return;
    }
    key.style.background = '#ddd';
}

const handleMouseUp = (key) => {
    
    if (key.className.includes('black')) {
        key.classList.remove('black--pressed')
        
        return;
    }
    key.style.background = 'white';
}

keys.forEach((key) => {

    key.addEventListener('mousedown', () => handleMouseDown(key))
    key.addEventListener('mouseup', () => handleMouseUp(key))

});

checkbox.addEventListener('change', ({ target }) => {
    if (target.checked) {
        switcher.classList.add('switcher--active');
        keysSection.classList.remove('disabled-keys');
        return;
    }

    switcher.classList.remove('switcher--active');
    keysSection.classList.add('disabled-keys');
});

const keyDownMapper = {
    "1": () => handleMouseDown(keys[0]),
    "q": () => handleMouseDown(keys[1]),
    "2": () => handleMouseDown(keys[2]),
    "w": () => handleMouseDown(keys[3]),
    "3": () => handleMouseDown(keys[4]),
    "e": () => handleMouseDown(keys[5]),
    "4": () => handleMouseDown(keys[6]),
    "r": () => handleMouseDown(keys[7]),
    "5": () => handleMouseDown(keys[8]),
    "t": () => handleMouseDown(keys[9]),
    "6": () => handleMouseDown(keys[10]),
    "y": () => handleMouseDown(keys[11]),
    "7": () => handleMouseDown(keys[12]),
    "u": () => handleMouseDown(keys[13]),
    "8": () => handleMouseDown(keys[14]),
    "i": () => handleMouseDown(keys[15]),
    "9": () => handleMouseDown(keys[16]),
    "o": () => handleMouseDown(keys[17]),
    "0": () => handleMouseDown(keys[18]),
    "p": () => handleMouseDown(keys[19]),
    "-": () => handleMouseDown(keys[20]),
    "´": () => handleMouseDown(keys[21]),
    "=": () => handleMouseDown(keys[22]),
    "[": () => handleMouseDown(keys[23]),
}
const keyUpMapper = {
    "1": () => handleMouseUp(keys[0]),
    "q": () => handleMouseUp(keys[1]),
    "2": () => handleMouseUp(keys[2]),
    "w": () => handleMouseUp(keys[3]),
    "3": () => handleMouseUp(keys[4]),
    "e": () => handleMouseUp(keys[5]),
    "4": () => handleMouseUp(keys[6]),
    "r": () => handleMouseUp(keys[7]),
    "5": () => handleMouseUp(keys[8]),
    "t": () => handleMouseUp(keys[9]),
    "6": () => handleMouseUp(keys[10]),
    "y": () => handleMouseUp(keys[11]),
    "7": () => handleMouseUp(keys[12]),
    "u": () => handleMouseUp(keys[13]),
    "8": () => handleMouseUp(keys[14]),
    "i": () => handleMouseUp(keys[15]),
    "9": () => handleMouseUp(keys[16]),
    "o": () => handleMouseUp(keys[17]),
    "0": () => handleMouseUp(keys[18]),
    "p": () => handleMouseUp(keys[19]),
    "-": () => handleMouseUp(keys[20]),
    "´": () => handleMouseUp(keys[21]),
    "=": () => handleMouseUp(keys[22]),
    "[": () => handleMouseUp(keys[23]),
}

document.addEventListener('keydown', (event) => {
    keyDownMapper[event.key]()

});
document.addEventListener('keyup', (event) => {
    keyUpMapper[event.key]()

});