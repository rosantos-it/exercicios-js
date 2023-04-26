let lista = [];

function enviar() {
    let texto = document.getElementById("texto");

    let valor = texto.value;

    lista.push(valor);

    console.log("Valor Inserido");
}

function visualizar() {
    console.log(lista); 
}