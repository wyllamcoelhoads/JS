/*var mensagem = "Ola mundo";
const mensagem2 = "Ola";
let mensgaem3 = "olá mundo";
mensagem4 = 'Ola pela ultima vez';

console.log(mensagem)

mensagem = "novo valor"
console.log(mensagem)
*/

// exemplos de uso dos operadores logicos

x = 2;

expressao_1 =  (x % 2 == 0) //é par?
expressao_2 = (x % 2 == 1) // é impar?
/*
console.log(expressao_1) // false
console.log(expressao_2) // true

//comparanto as duas expressoees ao mesmos tempo com operador and 
console.log("operacao logica com and")
console.log( expressao_1 && expressao_2) // false

// operador or
console.log("operacao logica com or")
console.log( expressao_1 || expressao_2) // true

// operador not
console.log("operacao logica com not")
console.log (!(expressao_1 && expressao_2))
console.log (!(expressao_1 || expressao_2))
*/

function primeiraetapa(acertos_na_prova, semestres_cursados){
    const total_questoes = 20
    const nota_minina_aprovacao = 0.7
    const min_semestre = 3

let nota = acertos_na_prova / total_questoes

if((nota >= nota_minina_aprovacao) && (semestres_cursados >= min_semestre)){
    return "Aprovado";
}else{
    return "Reprovado";
}
}
console.log(primeiraetapa(16, 2)); // Chamada da função e impressão do resultado no console
