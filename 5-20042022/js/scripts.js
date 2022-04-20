// objetos e coleções
// vamos criar uma coleção de nomes

var nomes = ["Paula","Henrique", "Vanessa"];

// usando

for(var i = 0; i < nomes.length ; i++){
    console.log(nomes[i]);
}

/*
outra de ler coleções é usando interadores,
neste caso, você pode usar foreach ou mal
*/

// nomes.forEach()...
// nomes.map()...
nomes.forEach(saida);

function saida(valor, indice){
    console.log("Do forEach -> " + valor);
}

// variação do foreach com a função dentro da estrutura
nomes.forEach(function(valor, indice){
    console.log(valor);
})

// variação do foreach com arrou function

nomes.forEach((valor,indice)=>{
    console.log("Arrow Function -> " + valor);
});

// -------------------------- Map ------------------------------

nomes.map((valor,indice)=>{
    console.log("Posição :" + indice + " Nome: " + valor);
})

// vamos criar um objeto chamado cliente
// para a definição dos dados do cliente, é importante que estes
// fiquem entre o cercado (chaves)
// essa estrutura é do tipo chave - valor

const endereco = {
    tipo: "Rua",
    logradouro: "Soldado Fernandes",
    numero: 73,
    complemento: "Casa dos fundos",
    bairro: "Jardim Novo",
}

const cliente = {
    id:1,
    nome: "Paula de Oliveira",
    idade:25,
    cpf:"220154498-90",
    endereco: endereco,
};

const prodcalca = {
    id: 1,
    nome: "Calça Jeans",
    preco: "R$ 150.00",
}

const prodblusa = {
    id: 2,
    nome: "Blusa Jeans",
    preco: "R$ 50.00",
}

const prodtenis = {
    id: 3,
    nome: "Tênis",
    preco: "R$ 250.00",
}

const pedido = {
    id: 552,
    data: "20/04/2022",
    hora: "15:02",
    cliente: cliente,
    produtos: [prodcalca, prodblusa, prodtenis],
    entrega: endereco,
}

console.log("Saída do objeto cliente");
console.log(pedido);

const out  = document.getElementById("output");
out.innerHTML += `Id do Pedido: ${pedido.id}`
out.innerHTML += `<br>Nome do cliente: ${pedido.cliente.nome}`

pedido.produtos.map((pr,ix) =>{
    out.innerHTML += `<br>Pedidos do cliente: ${pr.nome + " - " + pr.preco}`
})

out.innerHTML += `<br>Entregrar em: ${pedido.entrega.logradouro}`