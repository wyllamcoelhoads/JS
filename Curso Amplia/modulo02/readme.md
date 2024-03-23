# Segunda aula do curso

## tratando tipos de dados diferentes!

Js faz a verificação logica de tipos distintos sem apresentar erros, isso pode ser um problema, se não interpretado corretamente!

`var x = 1  `
`var y = "1" `

são duas variaveis de tipos diferentes, int e string, porém executando;
`console.log(x+y)`
e retornado 11, ou seja uma concatenação de variaveis e a atribuição de 1 em 1 = 11

ou saja se eu escrever;

`if( x == y)`
sera retornado true, para que seja verificado o tipo das variaveis usamos 

`if( x === y)`
assim sera retornado false.