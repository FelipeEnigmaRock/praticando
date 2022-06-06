function criaHoraDosSegundos (segundos) {
    let data = new Date(segundos * 1000);

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone:'GMT'
    });
}

const relogio = document.querySelector('h2');
const iniciar = document.querySelector('button:nth-child(1)');
const pausar = document.querySelector('button:nth-child(2)');
const zerar = document.querySelector('button:nth-child(3)');
let segundos = 0;
let timer;



iniciar.addEventListener('click', () => {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
});
pausar.addEventListener('click', () => {
    relogio.classList.add('pausado');
    clearInterval(timer);
});
zerar.addEventListener('click',() => {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    relogio.classList.remove('pausado');
    segundos = 0;
} );


function iniciaRelogio () {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}


