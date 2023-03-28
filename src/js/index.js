 // passo 1 - dar um jeito de pegar o elemento HTML dos botoes 
    const botoesCarrossel = document.querySelectorAll('.botao');
    const imagens = document.querySelectorAll('.imagem');
// passo 2 - dar um jeito de identificar o clique do usuario no botoes

    botoesCarrossel.forEach((botao, indice) => {
    console.log(botao)
    botao.addEventListener('click', () => {

    desativarBotaoSelecionado();

    selecionarBotaoCarrossel(botao);
 
    esconderImagemAtiva();

    mostrarImagemDeFundo(indice);
})
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

