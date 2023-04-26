//--Exemplo 1 Não Funciona =/ --//

function soma() {
    let resp = document.getElementById("resp");
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let texto = '';

    if (document.getElementById('soma').press)
        texto = soma(num1, num2);
    if (document.getElementById('subtracao').press)
        texto = subtracao(num1, num2);
    if (document.getElementById('multiplicacao').press)
        texto = multiplicacao(num1, num2);
    if (document.getElementById('divisao').press)
        texto = divisao(num1, num2);

    resp.innerHTML = texto;
}

function soma(x, y) {
    return (x + y);
}

function subtracao(x, y) {
    return (x - y);
}

function multiplicacao(x, y) {
    return (x * y);
}

function divisao(x, y) {
    return (x / y);
}

//--Exemplo 2 Não Funciona =/ --//

function main()
{
 var resp = document.getElementById('resp');
 var num1 = parseFloat(document.getElementById("num1").value);
 var num2 = parseFloat(document.getElementById("num2").value);
 var texto='';

 if(document.getElementById('soma').checked)
  texto = soma(num1, num2);
 if(document.getElementById('subtracao').checked)
  texto = subtracao(num1, num2);
 if(document.getElementById('multiplicacao').checked)
  texto = multiplicacao(num1, num2);
 if(document.getElementById('divisao').checked)
  texto = divisao(num1, num2);

 resp.innerHTML = texto;
}

function soma(x, y)
{
  
  return (x+y);
}

function subtracao(x, y)
{
  
  return (x-y);
}

function multiplicacao(x, y)
{
  
  return (x*y);
}

function divisao(x, y)
{
  
  return (x/y);
}




