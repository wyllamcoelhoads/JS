// modulo 02
/*
var x = 11;

if(x % 2 == 0){
    console.log(x + " é numero par!");
}else{
    console.log(x + " é impar!");
}
*/
//testando uma condição com tipos não numericos

idade = "6";

if(idade >= 4 && idade <6){
    console.log("Idade " + idade + " Padrão, Pré-escolar");
} else if(idade >= 6 && idade <15){
    console.log("Idade " + idade + " Padrão, Ensino fundamental");
} else if (idade >= 15 && idade < 18){
    console.log("Idade " + idade + " Padrão, Ensino médio");
}else{
    console.log("Idade " + idade + " fora do padrão escolar");
}
console.log("*************************");
console.log("Fim do validação")