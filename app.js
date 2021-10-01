function Chutar() {
    // console.log("Função chutar")

    //sortear um numero aleatorio secreto
    let numeroSecreto = 3

    // pegar o numero digitado e converter para numero inteiro
    let chute = parseInt(document.querySelector("#valor").value)

    // console.log(numeroSecreto , chute)

    //comparar o numero digitado com o numero aleatorio
    if (numeroSecreto == chute) {
        //se estiver correto e os numeros forem iguais, mostrar a mensagem que a pessoa acertou
        document.querySelector(".resultado").innerHTML = "VOCÊ ACERTOU"
    }
    else {
        //se tiver errado e os numeros forem diferentes, mostrar a mensagem que a pessoa errou
        document.querySelector(".resultado").innerHTML = "VOCÊ ERROU"
    }
}