'use strict';


// loop thorugh the array of colors when user presses button, change background color;

// Listen for the button click on the change color button, called colorButton;
const buttonEvents = () => {
        document.querySelector("#colorButton");
        document.addEventListener('click', handleButtonClick);
};


// step through the array on every button click, and change the background color
const handleButtonClick = (e) => {
    const buttonId = e.target.type;

    const bodySelector = document.querySelector("body");

    const changeBodyColor = () => {
        bodySelector.style.backgroundColor=array.color;
    }

    for (i = 0; i < simplePallete.length; i++ ){
        // if click button go to next color in array and put in on the background
        if (document.querySelector("#colorButton")) {
            changeBodyColor();
        }
    }    
}

// Call yo functions!
const init = () => {
    buttonEvents();
}

init();