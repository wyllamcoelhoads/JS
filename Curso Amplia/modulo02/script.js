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
/*
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
*/

// alteração no codigo da primeira aula 

function primeiraetapa(acertos_na_prova, semestres_cursados){
    const total_questoes = 20
    const nota_minina_aprovacao = 0.7
    const min_semestre = 3

let nota = acertos_na_prova / total_questoes

if((nota >= nota_minina_aprovacao) && (semestres_cursados >= min_semestre)){
/*    return "Aprovado";
}else{
    return "Reprovado";
    // apos ser reprovado caso o candidato tenha atingido 70% de acerto no teste ele vai ficar no banco de talentos.
}
*/
//novo codigo
return "Aprovado!";
}else if(nota >= nota_minina_aprovacao){
    return "Você foi incluido no nosso banco de talentos!!";
}else{
    return "Reprovado!";
}

}
console.log(primeiraetapa(10, 1)); // Chamada da função e impressão do resultado no console