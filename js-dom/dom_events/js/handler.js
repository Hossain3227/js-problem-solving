document.getElementById('btn-update-title').addEventListener('click', function(){
    // console.log('btn clicked');
    const pageTitleElement= document.getElementById('p-title');
    console.log(pageTitleElement);
    pageTitleElement.innerText = 'updated page title element'
    
})

document.getElementById('btn-login').addEventListener('click', function(){
        // console.log('login button clicked');
        const userInfoP= document.getElementById('user-info');
        userInfoP.innerText='user logged in'
        
    })

document.getElementById('btn-update').addEventListener('click', function(){
    console.log('update button clicked');
    // get the text from the input field
    const nameInput = document.getElementById('input-name');
    console.log('nameInput');
     const namE = nameInput.value;
    console.log('name', namE);
    // set the name
    const nameP= document.getElementById('p-name');
    nameP.innerText= namE;
    

})



