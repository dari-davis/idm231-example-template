//
//
//
//
function fade2Content() {
    console.log('fade2Content called');
    document.body.classList.remove("blackScreen");
}

const displayObj = document.getElementById('display');
const trumpetBtn = document.getElementById('trumpet');
const saxophoneBtn = document.getElementById('saxophone');
const guitarBtn = document.getElementById('guitar');

trumpetBtn.addEventListener('click', function() {
    //console.log('trumpet button clicked');
    userPicked('trumpet');
});

saxophoneBtn.addEventListener('click', function() {
    userPicked('saxophone');
});

guitarBtn.addEventListener('click', function() {
    userPicked('guitar');
});

function userPicked(buttonName) {
    //console.log('User picked ' + buttonName);
    // swap out large image for button related image
    // show the description
    // play sound

    switch (buttonName) {
        case 'trumpet':
            console.log('trumpet was clicked');
            displayObj.src = 'img/trumpet.png';
            displayObj.classList.add('visible');
        break;
        case 'saxophone':
            console.log('saxophone was clicked');
            displayObj.src = 'img/saxophone.png';
        break;
        case 'guitar':
            console.log('guitar was clicked');
            displayObj.src = 'img/guitar.png';
        break;
        default:
            console.log('A button was clicked!');
    }

}

