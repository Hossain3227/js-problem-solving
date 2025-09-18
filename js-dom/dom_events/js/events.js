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

const btnMakePurple = document.getElementById('btn-make-purple');
// console.log(btnMakePurple);

btnMakePurple.onclick = makePurple;

function makePurple(){
    document.body.style.backgroundColor = 'purple';
}

// new addeventlistener

document.getElementById('btn-make-green').addEventListener('click',function makeGreen(){
    document.body.style.backgroundColor='green';
})

document.getElementById('btn-make-gold').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})








