//Create a button that adds 1 to a botScore stored in localStorage 
if(!localStorage.getItem('botScore')){
    localStorage.setItem('botScore', 0);
}

document.querySelector('button').addEventListener('click', addOne);
document.querySelector('h2').innerText = localStorage.getItem('botScore');

function addOne(){
    let botScore = Number(localStorage.getItem('botScore'));
    botScore += 1;
    localStorage.setItem('botScore', botScore);

    document.querySelector('h2').innerText = localStorage.getItem('botScore');
}

