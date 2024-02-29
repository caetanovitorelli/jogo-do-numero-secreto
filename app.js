let listaDeNumeroSorteados = []; 
let numeroLimite = 10
let numeroSecreto = 7;
let tentativas = 1


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}
function exibirMensagemInicial(){
    exibirTextoNaTela("h1","Jogo do numero secreto");
    exibirTextoNaTela("p","Escolha um numero entre 1 e 10");
}
exibirMensagemInicial();
exibirTextoNaTela("h1","Jogo do numero secreto");
    exibirTextoNaTela("p","Escolha um numero entre 1 e 10");

function verificarChute(){
    let chute = document.querySelector("input").value;
   
    if(chute == numeroSecreto) {
        exibirTextoNaTela("h1","Acertou");
        let palavraTentaiva = tentativas > 1 ? `tentativas`: `tentativa`;
        let mensagemTentativas = `Voce descobriu o numero secreto com  ${tentativas} ${palavraTentaiva}`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");


    } else{
        if(chute > numeroSecreto){
            exibirTextoNaTela("p", "O numero é menor");

        }else {
            exibirTextoNaTela("p", "o numero secreto é maior");
        }

        ///tentativas = tentativas + 1 ;
        tentativas++
        limparCampo();
    }

}
function gerarNumeroAleatorio() {
   let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;

   if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumeroSorteados = [];
   }
   if(listaDeNumeroSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio ();
   } else{
    listaDeNumeroSorteados.push(numeroEscolhido);
    console.log(listaDeNumeroSorteados);
    return numeroEscolhido;
   }
}
function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabeld",true);
}