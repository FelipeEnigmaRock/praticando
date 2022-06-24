const input = document.querySelector('input');
const button  = document.querySelector('button');
const div = document.querySelector('div');

button.addEventListener('click', () => {
    
    calculaTabuada(input.value);
})

function calculaTabuada (inputnumber) {
    div.innerText = '';
    
        for (let i = 1; i <= 10; i++) {
            const p = document.createElement('p');
            p.innerText = `${inputnumber} x ${i} = ${inputnumber *i} `
            div.appendChild(p);          
        }
}




