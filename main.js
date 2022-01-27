const trumpetBtn = document.getElementById('trumpet');
const saxophoneBtn = document.getElementById('saxophone');
const guitarBtn = document.getElementById('guitar');
const bottomDiv = document.getElementById('bottom');

trumpetBtn.addEventListener('click', function() {
    userPicked('trumpet');
});

saxophoneBtn.addEventListener('click', function() {
    userPicked('saxophone');
});

guitarBtn.addEventListener('click', function() {
    userPicked('guitar');
});

// create function userPicked();
function userPicked(instrument) {
    console.log(`The user picked a ${instrument}`);
    //window.alert(`The user picked a ${instrument}`);
}