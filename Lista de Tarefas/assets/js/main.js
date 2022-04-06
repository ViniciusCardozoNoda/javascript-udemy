const inputtarefa = document.querySelector('.input-tarefa');
const btntarefa = document.querySelector('.btn-tarefa');
const tarefa = document.querySelector('.tarefa');

function criaLi() {
    const li = document.createElement('li');
    return li;
}// função de criar uma lista

inputtarefa.addEventListener('keypress', function(e)  {
    if(e.keyCode === 13) {
        if(!inputtarefa.value) return; // e só executa se o botão 13 for pressionado o ENTER 
        criatarefa(inputtarefa.value); // cria uma tarefa
    }
});

function limpaInput() {
    inputtarefa.value = '';
    inputtarefa.focus(); // Limpa a tarefa quando você apaga uma tarefa
};

function criaBotaoApagar(li) {
    li.innerText += ' '; // da espaço
    const botaoApagar = document.createElement('button'); // cria um botão 
    botaoApagar.innerText = 'Apagar'; // Ele cria um texto escrito apagar 
    botaoApagar.setAttribute('class', 'apagar'); // pega a classe
    botaoApagar.setAttribute('title', 'Apagar está tarefa'); //cria um titulo e aparece apagar está tarefa
    li.appendChild(botaoApagar); // ??
} // a função cria um botão de apagar 

function criatarefa(textoinput) {
    const li = criaLi();
    li.innerText = textoinput;// escreve um texto 
    tarefas.appendChild(li);
    limpaInput();// limpa o input
    criaBotaoApagar(li);// e no botão apagar a lista que aparece 'apagar'
    salvarTarefas();// salva a tarefa quando fecha o navegador
}; // a função cria uma tarefa textoinput e 

btntarefa.addEventListener('click', function() {
    if (!inputtarefa.value) return;// ??
    criatarefa(inputtarefa.value); // ?? 
});// função que adiciona o evento de click 

document.addEventListener('clike', function(e) {
    const el = e.target; // pega o evento de click

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();// remove o que foi salvo 
        salvarTarefas();// salva o navegador quando fecha
    }
}); // adiciona o evento de click com (event) e cria um if se clicar apagar ele remove o que foi salvo

function salvarTarefas() {
    const litarefas = tarefas.querySelectorAll('li')// cria uma lista 
    const listadetarefas = [];// coloca a lista dentro de um array

    for (let tarefa of litarefas) {
        let tarefatexto = tarefa.innerText;
        tarefatexto = tarefatexto.replace('Apagar', '').trim();// ??
        listadetarefas.push(tarefatexto);
    }// se a tarefa ou listarefas 

    const tarefasJSON = JSON.stringifty(listadetarefas);
    localStorage.setItem('tarefas', tarefasJSON);
};// salva as coisas na lista quando fecha o navegador

function adicionatarefassalvar() {
    const tarefas = localStorage.getItem('tarefas');// ??
    const listadetarefas = JSON.parse(tarefas);// ??

    for (let tarefas of listadetarefas) {
        criatarefa(tarefa);
    }// se tarefas ou listatarefas ele cria uma tarefa 
}; // essa função salva o que foi posto na lista
adicionatarefassalvar();