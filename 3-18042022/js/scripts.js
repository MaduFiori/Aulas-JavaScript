function tabuada(){
    var num = prompt ("Digite um número para ver a tatubuada: ");
    var rs = "";

    for (var i = 0; i<= 10; i++){
        rs += "\n" + num + "x" + i + "=" + num * i;
    }
    return rs;
}

function retangulo(row, col){
    var saida = "";

    for(let linha = 0 ; linha <= row; coluna++){
        for (let coluna = 0; coluna <= col; linha++){
            saida+="*";
        }
        saida+="<br>";
    }
    document.getElementById("painel").innerHTML=saida;
}

function triangulo(){
    var saida = "";

    for(let linha = 1 ; linha<= 30 ; linha++){
        for(let coluna = 1 ; coluna <= linha; coluna++){
        saida+="*";
        }
        saida+="<br>";
    }

    document.getElementById("triangulo").innerHTML=saida;
}

function triangulo2(){
    var saida = "";

    for(let linha = 30 ; linha>= 0 ; linha--){
        for(let coluna = 1 ; coluna <= linha; coluna++){
        saida+="*";
        }
        saida+="<br>";
    }

    document.getElementById("triangulo2").innerHTML=saida;
}

// ordenação

function ordenar(numeros){
    //Ordenação Insert(Insertation)

    for(let j = 1 ; j < numeros.length ; j++){
        let x = numeros[j];
        let i;

        for(i = j - 1 ; i>= 0 && numeros[i] >x; i-- ){
            numeros[i+1] = numeros[i];
        }
        numeros[i+1] = x;
    }
    for(let p = 0; p < numeros.length ; p++){
        console.log(numeros[p]+"-");
    }

}

function tabela(){
    var produtos = [
        ["Produtos", "Quantidade", "Preço"],
        ["Calça", "45", "R$ 150,00"],
        ["Blusa", "15", "R$45,00"],
        ["Sapato", "35", "R$ 250,00"],
    ];

    var saida = "";

    for(var linha = 0 ; linha <= 3 ; linha++){
        for(var coluna = 0 ; coluna <= 2; coluna++){
         if(linha == 0){   
        saida+="<span class=titulo>" + produtos[linha][coluna] + "</span>";
       
        } else{
        saida+="<span class=produtos>" + produtos[linha][coluna] + "</span>"; 
        }
    }
    saida += "<br>";
    }
    document.getElementById("loja").innerHTML=saida;
}
