// Query selectors
let container = document.querySelector('.container');
let rows = document.querySelector('#rows').value;
let columns = document.querySelector('#columns').value;
let makeButton = document.querySelector('.make');


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
        let division = Math.round(100 / rows);
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
            e.target.style.background = `black`;
        })
    }
}

