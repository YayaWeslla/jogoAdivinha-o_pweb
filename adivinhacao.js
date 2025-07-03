/*O computador "pensa" em um número e o jogador tem que adivinhar, recebendo dicas a cada tentativa.

1. O programa gera um número secreto entre 1 e 100. 
2. O jogador tem um número limitado de tentativas para adivinhar qual é o número. 
3. O sistema deve validar / converter o número informado pelo usuário
4. A cada palpite, o programa informa se o número secreto é "maior" ou "menor" que o palpite.
5 .A cada tentativa o sistema verifica se o usuário acertou o número
6. Caso tenha atingido o total  de tentativas o sistema encerra e informa que não conseguiu
7. Permanecer no looping no jogo até que o usuário encerre.*/

function gerarNumero() {
    return Math.floor(Math.random() * 100) + 1;
}

function jogarNovamente() { 
    const resposta = prompt("Deseja jogar novamente? (s/n)").toLowerCase();
    return resposta === "s";
}

function respostaUsuario() {
    alert('Você tem três tentativas!');
    
}

function jogar(){
    alert("Tente adivinhar o número em que estou pensando...");

    do{
        const numeroComputador = gerarNumero();
        alert(`${numeroComputador}`);
    }while(jogarNovamente());
}

jogar();