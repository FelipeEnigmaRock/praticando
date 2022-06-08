const input = document.querySelector('input');
const button = document.querySelector('button');
const content = document.querySelector('.items');

input.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!input.value) return;
        createTask(input.value);
    }
});

button.addEventListener('click', () => {
    if (!input.value) return;
    createTask(input.value);
});

function limpaInput () {
    input.value = '';
    input.focus()
}

function criaBotaoApagar (li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'X';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}

function createTask (textcontent) {
    const li = createLi();
    li.innerHTML = textcontent;
    content.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

function createLi () {
    const li = document.createElement('li');
    li.style.listStyleType = 'none';
    return li;
}

document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
})

function salvarTarefas () {
    const liTarefas = content.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('X', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);

}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const ListaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of ListaDeTarefas) {
        createTask(tarefa);
    }
}

adicionaTarefasSalvas();

