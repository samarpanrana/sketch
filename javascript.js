// Query selectors
let container = document.querySelector('.container');
let rows = document.querySelector('#rows').value;
let columns = document.querySelector('#columns').value;
let makeButton = document.querySelector('.make');
let randomizeToggle = false;
let randomizeButton = document.querySelector('.randomize')
let mouseCount = [];

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
        box.dataset.index = i;
        box.style.flexBasis = `${division}%`;
        container.appendChild(box);
    }

    setEvents();
}

function setEvents () {
    let boxes = document.querySelectorAll('.box');
    let index = 0;
    for (box of boxes) {
        mouseCount[index] = 0;
        box.addEventListener("mouseover", (e) => {
            let number = e.target.dataset.index;
            mouseCount[number] += 0.1;
            if (randomizeToggle) {
                let color = getRandomColor();
                e.target.style.background = `${color}`;
            }
            else {
                e.target.style.background = `rgba(0,0,0, ${mouseCount[number]})`;
            }
        })
        index++;
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