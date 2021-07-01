const generate = document.querySelector(".generate");
generate.addEventListener('click', randomNumber)

function randomNumber() {
    const from = document.querySelector(".from").value;
    const to = document.querySelector(".to").value;
    randomNum = Math.floor(Math.random()*parseInt(to));
    if(randomNum>=parseInt(from) ){
        const ran = document.querySelector('.ran');
        ran.innerHTML=randomNum;
    }
}