function exibirTextoNaTela(tag, text) {
    let field = document.querySelector(tag);
    field.innerHTML = text;
}
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');


function verificarChute(){
    console.log('O botão foi clicado!');
}