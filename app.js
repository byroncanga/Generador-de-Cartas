const spade = document.getElementById('spade');
const club = document.getElementById('club');
const heart = document.getElementById('heart');
const diamond = document.getElementById('diamond');
const number = document.querySelectorAll('.number');

const card = ()=> {
    cardRng = Math.floor(Math.random() * 4) + 1
    return cardRng
}

function numeros(){
    const numberRng = Math.floor(Math.random() * 14 + 1);
    if (numberRng === 11) return "J";
    if (numberRng === 12) return "Q"  
    if (numberRng === 13) return "K" 
    if (numberRng === 14) return "A" 
    return numberRng;
}

function cartas(){
    const numeroCard = numeros();
    number.forEach(function(elemento) {
        elemento.textContent = numeroCard;
    });

    const paloCarta= card()
    if(paloCarta === 1)spade.style.display = "flex";
    if(paloCarta === 2)club.style.display = "flex";  
    if(paloCarta === 3) heart.style.display = "flex";  
    if(paloCarta === 4) diamond.style.display = "flex";
}
cartas()