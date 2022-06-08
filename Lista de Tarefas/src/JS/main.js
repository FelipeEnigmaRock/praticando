const input = document.querySelector('input');
const button = document.querySelector('button');
const content = document.querySelector('.items');

button.addEventListener('click', () => {
    if (!input.value) return;
    createTask(input.value);

    
});

function createTask (textcontent) {
    const li = createLi();
    li.innerHTML = textcontent;
    content.appendChild(li);
}

function createLi () {
    const li = document.createElement('li');
    return li;
}