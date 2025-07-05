/*O computador "pensa" em um número e o jogador tem que adivinhar, recebendo dicas a cada tentativa.

1. O programa gera um número secreto entre 1 e 100. 
2. O jogador tem um número limitado de tentativas para adivinhar qual é o número. 
3. O sistema deve validar / converter o número informado pelo usuário
4. A cada palpite, o programa informa se o número secreto é "maior" ou "menor" que o palpite.
5 .A cada tentativa o sistema verifica se o usuário acertou o número
6. Caso tenha atingido o total  de tentativas o sistema encerra e informa que não conseguiu
7. Permanecer no looping no jogo até que o usuário encerre.*/

function gerarNumero() {
    return Math.floor(Math.random() * 100) + 1; //gera um número natural entre 1 e 100
}

function validarEntrada(input) {
    const numeroUsuario = parseInt(input, 10);
    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
        return null;
    }
    return numeroUsuario;
}

function jogar() {

    do {
        const numeroComputador = gerarNumero();
        const tentativasMaximas = 5;
        let tentativas = 0;
        let acertou = false;

        alert("Tente adivinhar o número natural em que estou pensando entre 1 e 100...");
        alert(`Você tem ${tentativasMaximas} tentativas.`);

        while (tentativas < tentativasMaximas && !acertou) {
            const chute = prompt(`Tentativa ${tentativas + 1}: Informe seu chute:`);
            const numeroUsuario = validarEntrada(chute);

            if (numeroUsuario === null) {
                alert("Entrada inválida. Por favor, insira um número natural entre 1 e 100.");
                continue;
            }

            tentativas++;

            if (numeroUsuario === numeroComputador) {
                alert(`Parabéns! Você acertou o número em ${tentativas} tentativas.`);
                acertou = true;
            } else if (numeroUsuario < numeroComputador) {
                alert("O número informado é MAIOR que o seu chute.");
            } else if (numeroUsuario > numeroComputador) {
                alert("O número informado é MENOR que o seu chute.");
            } else if (acertou === false){
                alert(`Que pena... Você não conseguiu adivinhar o número em ${tentativasMaximas} tentativas\n O número era: ${numeroSecreto}`);
            }
        }

        const resposta = prompt("Deseja jogar novamente? (s/n)").toLowerCase();
        if (resposta.toLowerCase() === "s") {
            jogar();
        } else {
            alert("Até a próxima partida!");
        }

    } while (resposta == "s");
}

jogar();