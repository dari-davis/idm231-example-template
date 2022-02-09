//
//
//
//
function fade2Content() {
    //console.log('fade2Content called');
    document.body.classList.remove("blackScreen");
}

const displayObj = document.getElementById('display');
const trumpetBtn = document.getElementById('Sco');
const saxophoneBtn = document.getElementById('Aqu');
const guitarBtn = document.getElementById('Pis');

trumpetBtn.addEventListener('click', function() {
    console.log('Trumpet - Scorpio button clicked');
    userPicked('Sco');
});

saxophoneBtn.addEventListener('click', function() {
    userPicked('Aqu');
});

guitarBtn.addEventListener('click', function() {
    userPicked('Pis');
});

function userPicked(buttonName) {
    console.log('User picked ' + buttonName);

    switch (buttonName) {
        case 'Sco':
            console.log('trumpet was clicked');
            displayObj.src = 'img/trumpet.png';
            displayObj.classList.add('visible');
        break;
        case 'Aqu':
            console.log('saxophone was clicked');
            displayObj.src = 'img/saxophone.png';
        break;
        case 'Pis':
            console.log('guitar was clicked');
            displayObj.src = 'img/guitar.png';
        break;
        default:
            console.log('A button was clicked!');
    }

}

//
// Calendar input code
//

const userSubmitBtn = document.getElementById('userSubmit');

// add Event Listener
userSubmitBtn.addEventListener('click', function() {
    //console.log('Submit button clicked!');

    const usersFirstName = document.getElementById('name').value;
    //console.log('Users name is: ' + usersFirstName);

    const userBday = new Date(document.getElementById('bday').value);
    //console.log(userBday);

    const whichMonth = userBday.getUTCMonth() + 1;
    //console.log(`Users month is: ${whichMonth}`);

    const whichDayOfMonth = userBday.getUTCDate();
    //console.log(`Users birth day is: ${whichDayOfMonth}`);

    // Zodiac Algorithm
    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
        AstroSign = "Cap";
    } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "Sag";
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "Sco";
    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "Lib";
    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "Vir";
    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "Leo";
    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "Can";
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "Gem";
    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "Tau";
    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "Ari";
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "Pis";
    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "Aqu";
    }

    console.log(AstroSign);
    userPicked(AstroSign);
});
