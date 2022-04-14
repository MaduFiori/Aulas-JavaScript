/* Criação de funções do tipos:
    - Sem retorno e sem argumentos
    - Sem retorno e com argumentos
    - Com retorno e sem argumentos
    - Com retorno e com argumentos
*/

// Sem retorno e sem argumentos

function dataehora(){
    var data = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
    console.log(data);
}

// Com retorno e sem argumentos()

function datetime(){
    return new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
}

// Função soma

function soma(num){
    var result = 0;
    for(var i = 0 ; i < num.length ; i++){
        result += parseInt(num[i]);
    }
    return result;
}

function passenum(){
    var num = prompt("Digite os números separadas por vírgulas");
    var n = num.split(",");
    return soma(n);
}

function background(){

    var saida = "";

    for(var i = 1 ; i <= 30; i++){

    var red = Math.round(1+Math.random()*254);
    var green = Math.round(1+Math.random()*254);
    var blue = Math.round(1+Math.random()*254);

    saida += "<div style='width:30px;padding:30px;background-color:rgb("+red+","+green+","+blue+")'></div>";

    }
    document.getElementById("tabela").innerHTML=saida;
}