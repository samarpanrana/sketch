// Query selectors
let container = document.querySelector('.container');
let rows = document.querySelector('#rows').value;
let columns = document.querySelector('#columns').value;
let makeButton = document.querySelector('.make');
let randomizeToggle = false;
let randomizeButton = document.querySelector('.randomize')

// Make container on load
makeContainer();

makeButton.addEventListener("click", (e) => {
    rows = document.querySelector('#rows').value;
    columns = document.querySelector('#columns').value;
    resetContainer();
    makeContainer();
})


function resetContainer () {
    container.innerHTML = ``;
}

function makeContainer () {
    for (let i = 0; i < rows*columns; i++) {
        let division = (100 / rows).toFixed(2);
        let box = document.createElement('div');
        box.classList.add('box');
        box.style.flexBasis = `${division}%`;
        container.appendChild(box);
    }

    setEvents();
}

function setEvents () {
    let boxes = document.querySelectorAll('.box');
    for (box of boxes) {
        box.addEventListener("mouseover", (e) => {
            if (randomizeToggle) {
                let color = getRandomColor();
                e.target.style.background = `${color}`;
            }
            else {
                e.target.style.background = `black`;
            }
        })
    }
}

function getRandomColor () {
    let letters = `1234567890ABCDEF`;
    let color = '#';
    for (let i = 0; i < 8; i ++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// randomize colors
randomizeButton.addEventListener("click", () => {
    randomizeToggle = !(randomizeToggle);
})