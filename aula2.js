//Aula da FlexPeak - dia 17/05
/*
var num=1;
var num2=2;
var num3=3;

console.log((!(num==1))||(num2>1))
*/

//Exercicio_1 - Pedir um numero ate ele estar 

/*
var num=prompt("Digite um numero:")
while(!(num>=0 && num<=10)) {
    num=prompt("Digite por favor um numero válido:")}

*/

/*

//Exercicio 1

var numero=prompt("Digite um número:   ");
console.log(numero>=0 && numero<=10)


//Exercicio 2

var numeracao=prompt("Digite um  numero decimal: ");
console.log(numeracao==10 || numeracao==20)
*/

//Exercicio 3
/*
var numero=prompt("Digite um numero:")
if(numero>=10){
    alert("Numero maior que 10!");
}
else{
    alert("Não é maior que 10")
}

//Exercicio 4
var valor=prompt("Digite um valor real:");
if(valor>=0){
    alert("Seu numeo é positivo");
}
else{
    alert("Seu numero é negativo");
}
*/




//Exerícios da Lista do Git HUB
//Exercicio 1
//var num="oi"
//console.log(typeof(num)) 




//Exercicio 6
/*
var idade=prompt("Digite sua idade: ")
if(0<=idade && idade<=10){
    alert("Você é uma crianca")}
else if (11<=idade && idade<=15){
    alert("Você é um adoslecente")}
else if (16<=idade  && idade<=18){
    alert("Você é um jovem")}
else if(19<=idade && idade<=60){
    alert("Você é um adulto")}
else{
    alert("Voce é um idoso")
}
*/
//Exercicio 7
/*
var veloc=prompt("Digite a velocidade do seu carro: ");
if(veloc<=60){
    alert("Você não pagará uma multa");
}
else{
    let velocExcedida=veloc-60;
    let multa=3.99*(velocExcedida);
    alert("Você pagará uma multa de: R$ "+ multa);
}

*/

//Exercicio 8
/*
var litros=prompt("Digite a quantidade de litros que voce abasteceu:");
var escolha=prompt("Digite se deseja alcool ou gasolina:")
if(escolha=="alcool")
{
    alert(`Voce pagará R$ ${litros*4.01}`);
}
else{
    alert(`Voce pagará pela gasolina R$ ${litros*5.99}`)
}

*/


//Exercicio 9
/*
var numeroUm=Number( prompt("Digite um numero:"));
var numeroDois=Number(prompt("Digite um segundo numero:"));
var operacao=prompt("Digite a operação que se deseja fazer:");
var resultado

if(operacao=="soma"){
    resultado=numeroUm + numeroDois;
    alert("Total:" + resultado);

}
else if(operacao=="subtrair"){
    resultado=numeroUm-numeroDois;
    alert("Total:"+ resultado);}

*/

//Exercicio de switch CASE
/*
var valor = Number(prompt("digite um valor"));
switch(valor){
    case 1:{
     console.log("Oi, meu nome é Ju");
     console.log("Valeu pela resposta");}
     break
    case 2:
        console.log("Meu nome é laranja");
    break
     default:
     console.log("Bom, meu nome é ana");
}
*/

//Exercicio da aula - 1
var anoAtual=Number(prompt("Digite o ano atual:"));
var anoNascimento=Number(prompt("Digite o ano de seu nascimento:"));
var idade=anoAtual-anoNascimento;
switch(idade){
    case (16):{
        alert("Voce pode votar" + idade);
    }
    break
    default:
        alert("Voce não pode votar"+idade);
}