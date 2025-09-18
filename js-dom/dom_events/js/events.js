console.log('external file');

function makeYellow(){
    document.body.style.backgroundColor = 'yellow'
}
function makeRed(){
    document.body.style.backgroundColor = 'red'
}


const btnMakeBlue = document.getElementById('btn-make-blue');
// console.log(btnMakeBlue);
btnMakeBlue.onclick = function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

