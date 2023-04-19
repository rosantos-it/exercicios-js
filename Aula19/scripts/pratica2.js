function subtracao(num1, num2) {
    if (num1 < num2) {
        return ("Não foi possível subtrair")
    } else {
        let resultado = num1 - num2;
        return resultado;
    }
}

console.log(subtracao(10, 2));
console.log(subtracao(1, 2));


function divisao(num1, num2) {
    if (num1 > num2) {
        return("Não foi possível dividir")
    } else {
        let resultado = num1 / num2; 
        return resultado; 
    }
}

console.log(divisao(10, 2));
console.log(divisao(1, 2));