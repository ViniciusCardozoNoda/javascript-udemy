const elementos = [
    {tag: 'p', texto: 'Frase1'},
    {tag: 'div', texto: 'Frase2'},
    {tag: 'footer', texto: 'Frase3'},
    {tag: 'section', texto: 'Frase4'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagcriada = document.createElement(tag);
    tagcriada.innerHTML = texto;
    div.appendChild(tagcriada);
}

container.appendChild(div);