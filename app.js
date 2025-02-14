let listaNumSorteados = [];
let numeroLimite = 15;
let numeroSecreto = gerarNumeroAleatorio(); //gerar numero aleatorio
let tentativas = 1;

//let titulo = document.querySelector('h1');  //document.queryselector é uma funcao para selecionar elementos do html
//titulo.innerHTML = 'Jogo número secreto'; //innerHTML é uma propriedade que permite alterar o conteúdo de um elemento html

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';



function exibirTextoNaTela(tag, texto){ //funcao para exibir texto na tela

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }//falar o texto

}

//teste
//teste 2
//teste3
//teste4
function exibirMensagemInicial(){

    exibirTextoNaTela('h1', 'Jogo número secreto'); 
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');


}

exibirMensagemInicial();

exibirTextoNaTela('h1', 'Jogo número secreto'); //chamando a funcao colocando a tag e dps o texto
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); //chamando a funcao colocando a tag e dps o texto


function verificarChute(){

    let chute = document.querySelector('input').value; //pegar o valor do input

    if(chute == numeroSecreto){ //se o chute for igual ao numero secreto    

        exibirTextoNaTela('h1', 'Acertou!');
        let palavrasTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavrasTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
    
        //console.log(chute == numeroSecreto); mostrar o numero secreto no console

        document.getElementById('reiniciar').removeAttribute('disabled'); //habilitar o botao reiniciar
    }
    else{
        if(chute > numeroSecreto){

            exibirTextoNaTela('p', 'Você errou! O numero secreto é menor!');

        }else{
            exibirTextoNaTela('p', 'Você errou! O numero secreto é maior!');   
        }
        tentativas++;
        limparCampo();
    }
}
function gerarNumeroAleatorio(){

    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1); //gerar numero aleatorio entre 1 e 10  
    // //parseInt é uma funcao que converte o numero para inteiro  
    // //return é uma funcao que retorna o valor
    let quantidadeElementos = listaNumSorteados.length;

    if(quantidadeElementos == numeroLimite){

        listaNumSorteados = [];

    }


    if(listaNumSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    else{
        listaNumSorteados.push(numeroEscolhido);
        console.log(listaNumSorteados);
        return numeroEscolhido;
    }

}

function limparCampo(){

    chute = document.querySelector('input');
    chute.value = '';//limpar o campo

}

function reiniciarJogo(){

    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true); //desabilitar o botao reiniciar

}