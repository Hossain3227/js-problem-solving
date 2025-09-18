// console.log(document);

// const student = {
//     name: "ron",
//     ID: 11,
//     play: function (time){
//         console.log(time, 'playing football');
        
//     }
// }

const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);
for(const li of liCollection){
    // console.log(li.innerText);
    
}

const allHeading = document.getElementsByTagName('h1');
for(const h1 of allHeading){
    // console.log(h1.innerText);
    
}

const fruitsTitle = document.getElementById('f-title');
fruitsTitle.innerText = 'Fruits changed by Js';


const places = document.getElementsByClassName('important-places')
// console.log(places);

for(const place of places){
    // console.log(place.innerText);
    
}

// querySelectorAll

const someLi = document.querySelectorAll('.f-container li')
// console.log(someLi);
for(const li of someLi){
    // console.log(li.innerText);
}


const sections = document.querySelectorAll('section');
// console.log(sections);
for(const section of sections){
    // console.log(section);
    section.style.border = '2px solid steelblue';
    section.style.marginBottom= '5px';
    section.style.borderRadius= '15px';
    section.style.paddingLeft='7px';
    section.style.backgroundColor='lightgray';
}

const placesContainer = document.getElementById('p-container');
placesContainer.style.backgroundColor = 'yellow'

placesContainer.classList.add('yellow-bg')
placesContainer.classList.remove('large-text');








