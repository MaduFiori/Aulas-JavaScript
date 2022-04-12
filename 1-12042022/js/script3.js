// script para solicitação de cor ao usuário
// quandp o usuário degitar a cor desejada, emtão
// iremos mudar a cor de gundo do body. Caso seja digitado 
// uma cor diferente, mudaremos a cor de fundo para uma pré 
// estabelecida e será exibido um aleta ao usuário.

var cor = prompt("Digite: \n\n"+
                "1 - Preto"+ 
                "\n2 - Amarelo"+
                "\n3 - Vermelho"+
                "\n4 - Azul"+
                "\n5 - Laranja")

if (cor == 1){
    document.body.style.backgroundColor="black"
}

else if(cor == 2){
    document.body.style.backgroundColor="yellow"
}

else if(cor == 3){
    document.body.style.backgroundColor="red"
}

else if(cor == 4){
    document.body.style.backgroundColor="blue"
}

else if(cor == 5){
    document.body.style.backgroundColor="orange"
}

else{
    document.body.style.backgroundColor="teal"
    alert("Você digitou uma opção inexistente")
}